import uuid from 'uuid';
import { StorageException } from '/Users/gferraz/Desktop/Practice/thinkful-server-side/16-blog-api-challenge/errorHandlers/exceptionClasses';

// var to hold the post
const posts = [];

export default {
  create({ title, content, author, publishDate = Date.now() }) {
    const post = {
      id: uuid.v4(),
      title,
      content,
      author,
      publishDate
    };
    posts.push(post);
    return post;
  },
  get(id='') {
    // if there is an id, find specific post
    if (id) {
      return posts.find(post => post.id === id);
    }

    // if no id is passed, return all posts in achronological order
    return posts.sort((a, b) => b.publishDate - a.publishDate);
  },
  delete(id) {
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex > -1) {
      posts.splice(postIndex, 1);
    }
  },
  update(updatedPost) {
    const {id} = updatedPost;
    const postIndex = posts.findIndex(post => post.id === updatedPost.id);
    
    if (postIndex === -1) {
      throw new StorageException(`Can't update item \`${id}\` because it doesn't exist.`)
    }

    // replace the old post with the new
    posts[postIndex] = updatedPost;

    // return the updated post
    return updatedPost;
  }
};
