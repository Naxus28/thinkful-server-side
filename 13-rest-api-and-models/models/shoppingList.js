import uuidv4 from 'uuid/v4';

const items = {};

export default {
  create(name, budget) {
    console.log('Creating new shopping list item');
    const item = {
      name: name,
      id: uuidv4(),
      budget: budget
    };

    items[item.id] = item;

    return item;
  },
  get() {
    console.log('Retrieving shopping list items');
    return items && Object.keys(items).map(key => items[key]) || 'no items';
  },
  delete(id) {
    console.log(`Deleting shopping list item \`${id}\``);
    let item = items[id];
    delete items[id];
    return item;
  },
  update(updatedItem) {
    console.log(`Updating shopping list item \`${updatedItem.id}\``);
    const {id} = updatedItem;
    if (!(id in items)) {
      throw StorageException(
        `Can't update item \`${id}\` because doesn't exist.`)
    }
    items[updatedItem.id] = updatedItem;
    return updatedItem;
  }
};