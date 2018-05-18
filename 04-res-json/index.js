import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

// `res.json` converts JavaScript objects to JSON and
// appropriately sets the Content-Type header to 
// application/json; charset=utf-8 . By default,
// we'll get a 200 HTTP status code.
app.get('/', (req, res) => res.json({foo: 'bar'}));

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));

