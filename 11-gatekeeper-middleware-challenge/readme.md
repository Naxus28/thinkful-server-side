# Gatekeeper middleware

To close out this lesson, you'll write a piece of middleware that can be used as part of an access control strategy. Access control is the practice of restricting use of some resource to approved individuals.

In this challenge, you'll create a piece of authentication middleware that looks for login credentials (that is, username and password) sent over in the request headers. If valid credentials are sent, an object representing the user will be added to the request object.

The app you'll be writing this middleware for has a single endpoint, /api/users/me. This endpoint is similar to Thinkful's accounts.thinkful.com/admin/whoami endpoint, which sends back a JSON object representing the authenticated user. Using the same browser you've used to log in to Thinkful's website, try visiting that endpoint yourself.

Later in this course, we'll learn how to use Passport.js, which is a popular library for adding authentication to Node apps. Working through this challenge will prepare you for thinking about authentication later in the course, in addition to giving you a chance to practice implementing middleware in Express apps.

Starting point:

```javascript
const express = require('express');
const queryString = require('query-string');

const app = express();

const USERS = [
  {id: 1,
   firstName: 'Joe',
   lastName: 'Schmoe',
   userName: 'joeschmoe@business.com',
   position: 'Sr. Engineer',
   isAdmin: true,
   // NEVER EVER EVER store passwords in plain text in real life. NEVER!!!!!!!!!!!
   password: 'password'
  },
  {id: 2,
   firstName: 'Sally',
   lastName: 'Student',
   userName: 'sallystudent@business.com',
   position: 'Jr. Engineer',
   isAdmin: true,
   // NEVER EVER EVER store passwords in plain text in real life. NEVER!!!!!!!!!!!
   password: 'password'
  },
  // ...other users
];

function gateKeeper(req, res, next) {
  // your code should replace the line below
  next();
}

app.get("/api/users/me", (req, res) => {
  if (req.user === undefined) {
    return res.status(401).json({message: 'Must supply valid user credentials'});
  }
  const {firstName, lastName, id, userName, position} = req.user;
  return res.json({firstName, lastName, id, userName, position});
});
```


The /api/users/me route will look for a user object on the request. Note that this is not a default property of request objects in Express. It's up to your middleware to add it. If the user object is undefined, /api/users/me returns a 401 error, indicating to the client that they must log in with valid credentials to access the route.

You're responsible only for completing the gateKeeper middleware function and configuring the app to use it.



## Requirements
The purpose of the gateKeeper function is to look at the request and see if there's a header called x-username-and-password. The expected value is a string that looks like user=ellen&pass=superSecretPassword. The function should parse the value for user and pass from the header, and look for a user with those credentials in the USERS array towards the top of the server.js file. If a user is found, the function should set req.user equal to the user object from USERS. If not, req.user should be undefined or null, depending on how you implement your function. All requests that go through this middleware should have a req.user property, but only requests with valid user credentials should have a user object as the value for req.user.

Here are some details and hints to get you started:

This function should get the string value sent for the request header 'x-username-and-password'. You can use the req.get('x-username-and-password') to retrieve the header value.

Use queryString (already imported at the top of server.js) to parse the values for user and pass from the request header. Specifically, use the queryString.parse method, which is designed for parsing URL query params. For instance, queryString.parse('catName=george&dogName=georgette') would produce {catName: 'george', dogName: 'georgette'}.
Check the user credentials against the USERS, array. You'll probably want to use the .find array method for this.

If a matching user is found, set req.user to that user. Otherwise, req.user should be either null or undefined. Note that you should never explicitly set a value to undefined, but depending on your implementation, req.user might end up being undefined.

The easiest way to test your app as you work on it is to use Postman. Make a GET request to base-url-for-your-app/api/users/me. You'll need to set a request header in the headers tab, with a key x-username-and-password and a value like user=joeschmoe@business.com&pass=password.

