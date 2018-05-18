import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

const logger = (req, res, next) => {
  let now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} ${req.method} ${req.url}`);

  next();
};

app.use(logger);

app.get('/', (req, res) => res.send(req.originalUrl));
app.get('/path1', (req, res) => res.send(req.originalUrl));
app.get('/path2', (req, res) => res.send(req.originalUrl));

app.listen(PORT, () => console.log(`Serving app on http://localhost:${PORT}`));