const totalLikes = (blogs) => {
  return blogs.reduce((a, b) => a + b.likes, 0);
};

const mostLiked = (blogs) => {
  return blogs.reduce((a, b) => (a.likes > b.likes ? a : b), blogs[0]);
};

const mostBlogs = (blogs) => {
  const authors = [];
  for (i = 0; i < blogs.length; i++) {
    var ind = authors.findIndex((a) => a.author === blogs[i].author);
    if (ind > -1) {
      authors[ind].blogs += 1;
    } else {
      authors.push({ author: blogs[i].author, blogs: 1 });
    }
  }
  return authors.reduce((a, b) => (a.blogs > b.blogs ? a : b), {
    author: "Empty",
    blogs: 0,
  });
};

module.exports = {
  totalLikes,
  mostLiked,
  mostBlogs,
};
