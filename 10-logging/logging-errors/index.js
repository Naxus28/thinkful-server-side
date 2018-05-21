import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

// get route
app.get('/', (req, res) => res.send('ok'));

// the catch all erros middleware has an extra 'err' param
// other middleware don't have it
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({error: 'Something went wrong'})
});

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));
