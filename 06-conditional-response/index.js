import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

// this is stubbed. random-ishly returns true or false
// the Math methods will return 0 or 1, which are then converted to Boolean
// there are easier ways to do it without the Boolean method:
// 1. just use !! OR
// 2. use 0 and 1 since 'if' statements check the truthy/falsy values
const isAuthorized = (req) => Boolean(Math.floor(Math.random() * 2));

app.get('/', (req, res) => {
  if (!isAuthorized(req)) {
    console.log(
      `unauthorized request for ${req.originalUrl} by an anonymous intruder`);
    res.status(401).send("i won't let you");
  }
  else {
    res.send('ok');
  }
});

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));
