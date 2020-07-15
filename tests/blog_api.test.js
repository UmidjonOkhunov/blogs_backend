const supertest = require("supertest");
const mongoose = require("mongoose");
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);
const bcrypt = require("bcrypt");

const User = require("../models/user");
const Blog = require("../models/blog");

beforeEach(async () => {
  await Blog.deleteMany({});

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog);
    await blogObject.save();
  }
});

describe("when there are initially saved blogs", () => {
  test("blogs are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all blogs are returned", async () => {
    const response = await api.get("/api/blogs");

    expect(response.body).toHaveLength(helper.initialBlogs.length);
  });

  test("the first Blog is about HTTP methods", async () => {
    const response = await api.get("/api/blogs");

    expect(response.body[0].title).toBe(helper.initialBlogs[0].title);
  });
});

describe("viewing a specific blog", () => {
  test("succeeds with a valid id", async () => {
    const blogsAtStart = await helper.blogsInDb();

    const blogToView = blogsAtStart[0];

    const resultBlog = await api
      .get(`/api/blogs/${blogToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(resultBlog.body).toEqual(blogToView);
  });

  test("fails with code 404 if blog does not exist", async () => {
    const validNonExistentId = await helper.nonExistingId();

    await api.get(`/api/blogs/${validNonExistentId}`).expect(404);
  });

  test("fails with code 400 if id is invalid", async () => {
    const invalidId = "5a3d5da59070081a82a3445";

    await api.get(`/api/blogs/${invalidId}`).expect(400);
  });
});
describe("addition of a new blog", () => {
  test("succeeds when data is valid", async () => {
    const newblog = {
      title: "async/await simplifies making async calls",
      author: "Babayega",
      likes: 31,
      url: "baba.yega.ru",
    };

    await api
      .post("/api/blogs")
      .send(newblog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const response = await helper.blogsInDb();

    const contents = response.map((r) => r.title);

    expect(response).toHaveLength(helper.initialBlogs.length + 1);
    expect(contents).toContain("async/await simplifies making async calls");
  });

  test("fails with code 400 when data is not valid", async () => {
    const newblog = {
      likes: 31,
      url: "baba.yega.ru",
    };

    await api.post("/api/blogs").send(newblog).expect(400);
  });
});

describe("other tests", () => {
  test("Likes is set to 0 when not specified", async () => {
    const newblog = {
      title: "How many likes can I get",
      author: "Umidjon",
      url: "Adet.com",
    };

    await api
      .post("/api/blogs")
      .send(newblog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blog = await Blog.find({ author: "Umidjon" });
    expect(blog[0].likes).toBe(0);
  });

  test("updating the number of likes", async () => {
    const blogs = await helper.blogsInDb();

    const newblog = {
      title: blogs[0].title,
      author: blogs[0].author,
      url: blogs[0].url,
      likes: 64,
    };

    const updatedBlog = await api
      .put(`/api/blogs/${blogs[0].id}`)
      .send(newblog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(updatedBlog.body.likes).toBe(newblog.likes);
  });

  test("a blog can be deleted", async () => {
    const blogsAtStart = await helper.blogsInDb();
    const blogToDelete = blogsAtStart[0];

    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

    const blogsAtEnd = await helper.blogsInDb();

    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1);

    const contents = blogsAtEnd.map((r) => r.title);

    expect(contents).not.toContain(blogToDelete.title);
  });

  test("id property is defined", async () => {
    const blogsAtStart = await helper.blogsInDb();

    const blogToView = blogsAtStart[0];

    const resultBlog = await api
      .get(`/api/blogs/${blogToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(resultBlog.body.id).toBeDefined();
  });
});

describe("when there is initially one user in db", () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash("sekret", 10);
    const user = new User({ username: "root", passwordHash });

    await user.save();
  });

  test("creation succeeds with a fresh username", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "salainen",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });

  test("creation fails with proper statuscode and message if username already taken", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "root",
      name: "Superuser",
      password: "salainen",
    };

    const result = await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    expect(result.body.error).toContain("`username` to be unique");

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
