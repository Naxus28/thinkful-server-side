import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

// req.get('host') gets the domain and the port if it is part of the url
// req.hostname is the domain
app.get('/echo/:what', (req, res) => {
  let query = req.query;
  let response = {
    hostname: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    params: req.params
  };

  if (Object.keys(query).length) {
    response.query = query;
  } 

  res.json(response);
});

app.listen(PORT, () => console.log(`Serving app on http://localhost:${PORT}`));