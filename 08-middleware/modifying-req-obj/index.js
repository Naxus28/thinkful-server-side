import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

const logger = (req, res, next) => {
  let now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
};

const addFooToReq = (req, res, next) => {
  console.log('Setting `request.foo` to equal "bar"');
  req.foo = 'bar'; // adds property foo to the req object
  next();
};

app.use(logger);
app.use(addFooToReq);

app.get('/', (req, res) => res.send(req.originalUrl));
app.get('/foo', (req, res) => res.send(`This value was added to req via function "addFoorToReq": ${req.foo}`));
app.listen(PORT, () => console.log(`Serving app on http://localhost:${PORT}`));