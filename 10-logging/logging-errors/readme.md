# Logging errors [https://expressjs.com/en/guide/error-handling.html](https://expressjs.com/en/guide/error-handling.html)

We may log information about errors inside of specific functions in our app by using try and catch.

```javascript
function myFunction (){
  // do some stuff
  try {
   // do something that might trigger an error
   console.log('SUCCESS: `myFunction` did what it\'s supposed to.');
  }
  // but if something goes wrong....
  catch(e) {
    // ... log the error
    console.error('FAILURE: `myFunction` failed.', e.stack);

  }
  // do some other stuff
}
```

This sort of "defensive programming" can be helpful when you're working on functions where you have specific reason to believe that an exception might occur, and you want to log details of the error. Note that Morgan defaults to logging during the response phase, so console.log and logging from Morgan will happen in a different order than the usual middleware sequence.

But what about the exceptions we don't anticipate? How can we ensure that we log details about an error that happens when a user makes a request to our app?

For this, we can use Express' catch-all error handling middleware function:

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

// ... other routes would be here

function logErrors(err, req, res, next) {
  console.error(err);
  return res.status(500).json({error: 'Something went wrong'})
}

app.use(logErrors);
```

In this example, if any of the routes defined in this app trigger an uncaught error, that error will be logged by logErrors.

The middleware functions we've seen so far have had three parameters: req, res, and next. To create a middleware function for handling errors, you supply four parameters: err, req, res, and next. The first parameter, err, will be the error object that bubbled up to the middleware layer. This is commonly known as Error-First Callbacks and is a convention in Node.

In the example above, logErrors will only run in the case that an uncaught error occurs. We log the error (using console.error) and send an HTTP status 500 back to the user, along with a short message explaining that something went wrong. Note that we don't provide details of the error to the end user. If there is sensitive information in the error log, we don't want to leak that to users.

> the error handler middleware needs to be the last middleware on the server in order to catch all uncaught errors that midht have happened in other middleware

