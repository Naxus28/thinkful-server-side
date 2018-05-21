import users from '../data/users.json';

// https://www.npmjs.com/package/query-string
const queryString = require('query-string');

export default (app) => {
  app.use('/api/users/me', (req, res, next) => {
    const credentials = queryString.parse(req.get('x-username-and-password'));

    // attach user to the req object (user or undefined if not found)
    req.user = users.find(user => user.userName === credentials.user && user.password === credentials.password)
    next();
  })
};
