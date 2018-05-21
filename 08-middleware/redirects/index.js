'use strict';

import express from 'express';
import handleRedirects from './middleware/redirect';

const app = express();
  
app.use(handleRedirects);

// this route says that when users make a request to the
// root URL, we'll return the HTML file at `views/index.html`
// could use express.static middleware as well
// app.use(express.static('views'));
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/index.html`));

// when a request is made to `/new-url-1`, we return
// a plain text response saying `new-url-1`.
app.get('/new-url-1', (req, res) => res.send('new-url-1'));

app.get('/new-url-2', (req, res) => res.send('new-url-2'));

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));

