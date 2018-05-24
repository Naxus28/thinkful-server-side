import blogModel from './blogModel';

const getBlogs = (req, res) => res.json(blogModel.get());
const getBlog = (req, res) => res.json(blogModel.get(req.params.id));
const postBlog = (req, res) => {
  const { author, title, content } = req.body;
  res.json(blogModel.create({author, title, content}));
};
const putBlog = (req, res) => res.json(blogModel.update(req.body));
const deleteBlog = (req, res) => res.json(blogModel.delete(req.params.id));

export {
  getBlogs,
  getBlog,
  postBlog,
  putBlog,
  deleteBlog
};