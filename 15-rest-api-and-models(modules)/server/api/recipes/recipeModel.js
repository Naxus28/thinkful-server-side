import uuidv4 from 'uuid/v4';

const items = {};

export default  {
  create(name, ingredients) {
    console.log('Creating a new recipe');
    const item = {
      name: name,
      id: uuidv4(),
      ingredients: ingredients
    };
    items[item.id] = item;
    return item;
  },
  get() {
    console.log('Retrieving recipes');
    return Object.keys(items).map(key => items[key]);
  },
  delete(itemId) {
    console.log(`Deleting recipe with id \`${itemId}\``);
    let item = items[itemId]
    delete items[itemId];
    return item;
  },
  update(updatedItem) {
    console.log(`Updating recipe with id \`${updatedItem.id}\``);
    const {id} = updatedItem;
    if (!(id in items)) {
      throw StorageException(
        `Can't update item \`${id}\` because it doesn't exist.`)
    }
    items[updatedItem.id] = updatedItem;
    return updatedItem;
  }
};