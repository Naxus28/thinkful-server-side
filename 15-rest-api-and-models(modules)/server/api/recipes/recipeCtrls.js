import recipesModel from './recipeModel';
import httpReqError from '../../helpers/httpReqError';

// get
const getRecipes = (req, res) => {
  res.json(recipesModel.get());
};

// post
const postRecipe = (req, res) => {
  const [name, ingredients] = [req.body.name, req.body.ingredients];

  if (!name || !ingredients) {
    return httpReqError('Missing required key/pair value', 400, res)
  }

  res.json(recipesModel.create(name, ingredients));
};

// delete
const deleteRecipe = (req, res) => {
  let id = req.params.id;
  let itemExist = recipesModel.get().find(item => item.id === id);

  if (!id) {
    return httpReqError('Missing required params.', 422, res);
  }

  if (!itemExist) {
    return httpReqError('Item does not exist.', 400, res);
  }

  res.json(recipesModel.delete(id));
};

// put
const putRecipe = (req, res) => {
  let paramId = req.params.id,
      body = req.body,
      requiredItems = ['name', 'ingredients', 'id'];

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
  res.json(recipesModel.update({
    name: body.name,
    id: body.id,
    ingredients: body.ingredients
  }));
};

export {
  getRecipes,
  postRecipe,
  deleteRecipe,
  putRecipe
};


