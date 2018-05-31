const URL = 'http://localhost:8080/blog';

// BUILD POST HTML
const buildPostsHTML = blogPosts => ( 
  blogPosts.map(post => (
    `<div class="blog-posts__post">
      <div class="blog-posts__post-header">
        <h3 class="blog-posts__post-title">${post.title}</h3>
        <button class="update">Update</button>
        <button class="delete">Delete</button>
      </div>
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
  let error = typeof err === 'string'
      ? err
      : `${err.status} ${err.statusText}: ${err.responseJSON.message}`;

  let $error = $('.error');

  $error.show();
  $error.html(error);
};

// VALIDATE FORM
const fieldsIncomplete = data => {
  const requiredFields = ['author', 'title', 'content'];
  const incomplete = [];

  requiredFields.forEach(field => {
    if (!data[field]) {
        incomplete.push(field);
      }
  });

  return incomplete;
};

// FORMAT FIELDS TEXT FOR FEEDBACK
const formatIncompleteFieldsErrorMsg = fields => {
  let formattedErrorMsg = '';

  fields.forEach((field, i)=> {
    // if it is the second to last element, add ', and' to string
    // or ' and' if there are only two elements in the array ("title and content" as opposed to "title, and content")
    if (i === fields.length-2) {  
      let text = fields.length > 2 ? `${field}, and ` : `${field} and `;
      formattedErrorMsg+=text;

    // if it is the last element, don't change anything
    } else if (i === fields.length-1) { 
      formattedErrorMsg+=field;

    // else, add comma
    } else {
      formattedErrorMsg+=`${field}, `;
    }
  });

  return formattedErrorMsg;
};

// GET
const getBlogPosts = () => {
  $.ajax({
    url: URL,
    dataType: 'json',
    success: posts => $('.blog-posts').html(buildPostsHTML(posts)),
    error: handleError
  });
};

// POST
const postBlogPosts = () => {
  ajaxHelper('POST', (posts, $error, $form) => {
    $('.blog-posts').prepend(buildPostsHTML([posts])); // pass the single post as an array so we can map over it on 'buildPostsHTML'
    $error.hide();
    $form[0].reset();
  });
};

// USED FOR POST AND PUT
const ajaxHelper = (method, success) => {
  $('.blog-form').on('submit', e => {
    e.preventDefault();
    let $form = $(e.target),
        $error = $('.error'),
        data = $form.serializeObject();
        incompleteFields = fieldsIncomplete(data);

     if (incompleteFields.length) {
      let formattedFields = incompleteFields.length === 1
          ? incompleteFields
          : formatIncompleteFieldsErrorMsg(incompleteFields);

      handleError(`Please enter "${formattedFields}" before submitting the form.`);
      return;
     }

     // POST
    $.ajax({
      url: URL,
      method,
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json' // browsers default Content-Type to application/x-www-form-urlencoded
      },
      data: JSON.stringify(data), // need to stringify to send as json
      success: posts => success(posts, $error, $form),
      error: handleError
    });
  });
};


// INIT
const init = () => {
  getBlogPosts();
  postBlogPosts();
};

$(init);




