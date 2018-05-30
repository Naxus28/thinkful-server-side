const URL = 'http://localhost:8080/blog';

const buildPostsHTML = blogPosts => ( 
  blogPosts.map(post => (
    `<div class="blog-posts__post">
      <h3 class="title">${post.title}</h3>
      <p class="content">${post.content}</p>
      <span class="author">${post.author}</span>
    </div>`
  ))
);

const appendBlogPost = blogPost => {
  $('.blog-posts').append(blogPost);
};

const handleError = err => {
  console.log('err: ', err);
};

// GET
const getBlogPosts = () => {
  $.ajax({
    url: URL,
    dataType: 'json',
    success: posts => {
      const postsHtml = buildPostsHTML(posts);
      $('.blog-posts').html(postsHtml)
    },
    fail: handleError
  });
};

const postBlogPosts = () => {
  $('form').on('submit', e => {
    e.preventDefault();

     // POST
    $.ajax({
      url: URL,
      method: 'POST',
      dataType: 'json',
      success: appendBlogPost,
      fail: handleError
    });
  });
};


$(getBlogPosts,
  postBlogPosts);




