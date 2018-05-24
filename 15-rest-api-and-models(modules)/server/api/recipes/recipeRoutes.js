const router = require('express').Router();

import {
  getRecipes,
  postRecipe,
  deleteRecipe,
  putRecipe
} from './recipeCtrls';

const getRoutes = () => {
  // get and post routes
  router.route('/')
    .get(getRecipes)
    .post(postRecipe);

  // delete and put routes
  router.route('/:id')
    .delete(deleteRecipe)
    .put(putRecipe);

  return router;
};

export default (app, router) => app.use('/recipes', getRoutes());
