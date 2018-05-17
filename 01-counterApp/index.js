import express from 'express';
import morgan from 'morgan';
const PORT = process.env.PORT || 5000;
let counter = 0;

// create express app instance
const app = express();

// serve static files
app.use(express.static('public'));

// logger--check docs for param options
app.use(morgan('dev'));

// api route to get the counter state
app.get('/api-counter',  (req, res, next) => {
  counter++;
  res.json({count: counter});
});

// reset counter
app.post('/api-counter', (req, res, next) => {
  counter = 0;
  res.json({count: counter});
});

// server listener
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}`));


