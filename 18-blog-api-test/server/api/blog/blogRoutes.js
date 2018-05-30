const router = require('express').Router();
import {
  getBlogs,
  getBlog,
  postBlog,
  putBlog,
  deleteBlog
} from './blogCtrls';

const getRoutes = () => {
  router.route('/')
    .get(getBlogs)
    .post(postBlog);

  router.route('/:id')
    .get(getBlog)
    .put(putBlog)
    .delete(deleteBlog);

  return router;
};

export default app => app.use('/blog', getRoutes());