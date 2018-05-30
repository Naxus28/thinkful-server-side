# Blog API Unit Test

So far, we've seen how to write unit tests for small pieces of code. In this assignment, we dive into integration testing. Integration tests target an app's HTTP layer, and, as such, test and document how clients will interact with your API.

For instance, imagine we've just written API endpoints for user management. We've exposed a users resource at the URL /users. When a GET request is made to /users, the response should include a list of all current users. When a POST request is made to /users with the right input values, a new user should be created and persisted. And so on and so forth for DELETE and PUT requests.

To create unit tests for the http layer we use [`mocha`](https://mochajs.org/), [`chai`](http://www.chaijs.com), and [`chai-http`](http://www.chaijs.com/plugins/chai-http/)