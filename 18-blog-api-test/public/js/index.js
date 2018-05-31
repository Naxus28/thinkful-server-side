const URL = 'http://localhost:8080/blog';

const buildPostsHTML = blogPosts => ( 
  blogPosts.map(post => (
    `<div class="blog-posts__post">
      <h3 class="blog-posts__post-title">${post.title}</h3>
      <p class="blog-posts__post-content">${post.content}</p>
      <div class="blog-posts__post-footer">
        <span class="author">${post.author}</span>
        <span class="date">${moment(post.publishDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
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




