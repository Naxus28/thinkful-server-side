import shoppingListModel from './shoppingListModel';
import httpReqError from '../../helpers/httpReqError';

// get
const getShoppingList = (req, res) => {
  res.json(shoppingListModel.get());
};

// post
const postShoppingList = (req, res) => {
  const [name, budget] = [req.body.name, req.body.budget];

  if (!name || !budget) {
    return httpReqError('Missing required key/pair value', 400, res)
  }

  res.json(shoppingListModel.create(name, budget));
};

// delete
const deleteShoppingList = (req, res) => {
  let id = req.params.id;
  let itemExist = shoppingListModel.get().find(item => item.id === id);

  if (!id) {
    return httpReqError('Missing required params.', 422, res);
  }

  if (!itemExist) {
    return httpReqError('Item does not exist.', 400, res);
  }

  res.json(shoppingListModel.delete(id));
};

// put
const putShoppingList = (req, res) => {
  let paramId = req.params.id,
      body = req.body,
      requiredItems = ['name', 'budget', 'id'];

  // check if body has the required items for update
  requiredItems.forEach(item => {
    if (!(item in body)) {
      return httpReqError(`Missing ${item} in request body.`, 400, res);
    }
  });

  // check if the id on the body and param match
  if (paramId !== body.id) {
    return httpReqError(`Request path id (${req.params.id}) and request body id (${req.body.id}) must match.`, 400);
  }
  
  // update the item and send payload
  res.json(shoppingListModel.update({
    name: body.name,
    id: body.id,
    budget: body.budget
  }));
};

export {
  getShoppingList,
  postShoppingList,
  deleteShoppingList,
  putShoppingList
};


