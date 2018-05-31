const URL = 'http://localhost:8080/blog';

// BUILD POST HTML
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

// ERROR HANDLER
const handleError = err => {
  console.log('err: ', err);
};

// GET
const getBlogPosts = () => {
  $.ajax({
    url: URL,
    dataType: 'json',
    success: posts => $('.blog-posts').html(buildPostsHTML(posts)),
    fail: handleError
  });
};

// POST
const postBlogPosts = () => {
  $('.blog-form').on('submit', e => {
    e.preventDefault();
    let $form = $(e.target),
        data = $form.serializeObject();

    $form[0].reset();

     // POST
    $.ajax({
      url: URL,
      method: 'POST',
      dataType: 'json',

      // need to set this header if sending data to be parsed by express.json() middleware
      // otherwise data will be parsed by express.urlencoded()
      headers: {
        'Content-Type': 'application/json' // browsers default Content-Type to application/x-www-form-urlencoded
      },
      data: JSON.stringify(data), // need to stringify to send as json
      success: posts => $('.blog-posts').prepend(buildPostsHTML([posts])),
      fail: handleError
    });
  });
};

// INIT
const init = () => {
  getBlogPosts();
  postBlogPosts();
};

$(init);




