require('dotenv').config(); // this line loads the .env file

import express from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT; // set in .env file
const ENV = process.env.NODE_ENV // set in .env file

const app = express();

app.use(express.static('public'));

app.get('/env', (req, res, next) => {
  res.json({ENV, PORT});
  console.log(`Get request on ${req.url} for ${ENV} environment`)
});
  
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));