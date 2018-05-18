/* Because this script is hosted on server A and is requesting data from server B,
 * a request with 'dataType' 'json' will fail, unless the server has CORS enabled
 * If the request is sent with 'dataType' 'jsonp' the server will send a response only if 
 * it is configured to send jsonp, otherwise the api call fails as well.
 * jsonp stand for json with padding, where padding is a function that wraps 
 * the data that is sent back from the server.
 * That function is executed on the client side and the data is passed to the $.ajax 'success' method.
 * Jquery does the work for us, so we don't need to call the function manually.
 * Because the api endpoint doesn't change, the browser might cache that function, which is not
 * ideal since the data might change on the server side.
 * To circumvent this problem, jquery creates functions dinamically for every api call.
 * To see this mechanism in action, open the network tab, click on the /data api call link, 
 * check the function name jquery created, and refresh the page to see how that name changes
*/
$(() => {
  $.ajax({
    url: 'http://localhost:8080/data',
    method: 'GET',
    dataType: 'jsonp',
    success: (data) => {
      let dataHTML = data.map(item => `<div style="margin-bottom: 10px;">Item: ${JSON.stringify(item)}</div>`);
      $('body').append(dataHTML);
    },
    error: (err) => console.log('err: ', err)
  })
});