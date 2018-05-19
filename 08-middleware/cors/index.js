import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

const logger = (req, res, next) => {
  let now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} ${req.method} ${req.url}`);

  next();
};

app.use(logger);

// enable cors
app.use(cors());


// enable cors -- verbose
/*
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    next();
  });
*/

app.get('/', (req, res) => res.send(req.originalUrl));
app.get('/path1', (req, res) => res.send(req.originalUrl));
app.get('/path2', (req, res) => res.send(req.originalUrl));

app.listen(PORT, () => console.log(`Serving app on http://localhost:${PORT}`));