import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

// req.get('host') gets the domain and the port if it is part of the url
// req.hostname is the domain
app.get('/:what', (req, res) => {
  res.json({
    hostname: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    query: req.query,
    params: req.params
  });
});

app.listen(PORT, () => console.log(`Serving app on http://localhost:${PORT}`));