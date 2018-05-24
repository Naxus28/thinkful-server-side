const router = require('express').Router();

import {
  getShoppingList,
  postShoppingList,
  deleteShoppingList,
  putShoppingList
} from './shoppingListCtrls';

const getRoutes = () => {
  
  // get and post
  router.route('/')
    .get(getShoppingList)
    .post(postShoppingList);

  // delete and put
  router.route('/:id')
    .delete(deleteShoppingList)
    .put(putShoppingList);

  return router;
};

export default (app, router) => app.use('/shopping-list', getRoutes(router));
