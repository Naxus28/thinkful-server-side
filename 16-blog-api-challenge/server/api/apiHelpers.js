import { ApiException } from '../../errorHandlers/exceptionClasses';

/**
 * validates post requests by checking if all required params are present
 * @param  {Object} postItems the post object
 * @return undefined | throw exception
 */
const validatePost = (postItems) => {
  let missingItems = [];

  for (let [key, value] of Object.entries(postItems)) {
    if (!value) {
      missingItems.push(key);
    }
  }

  if (missingItems.length) {
    throw new ApiException(`Missing required item(s): ${missingItems}`, 400);
  }
};

export {
  validatePost
};