const Blog = require("../models/blog");
const User = require("../models/user");

const initialBlogs = [
  {
    title: "I'm Batman",
    author: "Batman",
    likes: 500,
    url: "batman.marvel",
  },
  {
    title: "Just Saved the Day",
    author: "Superman",
    likes: 111,
    url: "superman.com",
  },
];

const nonExistingId = async () => {
  const blog = new Blog({
    title: "faw",
    author: "Superfweaman",
    likes: 11121,
    url: "2fa.com",
  });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
  usersInDb,
};
