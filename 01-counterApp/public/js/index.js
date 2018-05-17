let ajaxCall = httpMethod => $[httpMethod]('/api-counter', data => $('.count').text(data.count));

$(() => {
  $('button').on('click', e => {
    e.preventDefault();
    let httpMethod = $(e.target).hasClass('reset') ? 'post' : 'get';
    ajaxCall(httpMethod);
  });
});