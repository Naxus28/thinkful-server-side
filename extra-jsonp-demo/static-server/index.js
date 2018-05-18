import express from 'express';
import fs from 'fs';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));

