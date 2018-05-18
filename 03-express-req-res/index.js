import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

// our app will use Express to try to parse
// JSON from request bodies. If you don't add 
// body parsing middleware, even if the raw
// request contains, say, a JSON body,
// `req.body` will be undefined in the request handler
app.use(express.json());


const logRequest = (req, res, next) => {
  const logObj = {
    time: (new Date()).toTimeString(),
    method: req.method,
    hostname: req.hostname,
    path: req.path,
    "content type": req.get('Content-Type'),
    query: JSON.stringify(req.query),
    body: JSON.stringify(req.body)
  };
  console.dir(logObj);
  // calling `next()` causes the next function in the middleware stack
  // to be called
  next();
};

// app.all captures all requests to `/`, regardless of
// the request method.
app.all('/', logRequest);
// GET requests to the root of the server
app.get('/', (req, res) => res.send('a okay'));
// POST requests to the root of the server
app.post('/', (req, res) => res.status(201).send('a okay'));


// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));