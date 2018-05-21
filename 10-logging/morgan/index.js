import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('common'));
// the 'common' param has these options:
// app.use(morgan(':date[iso] :method :url :response-time'));

app.use(morgan('combined'));
// the 'combined' param has these options:
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

// see other options here: https://github.com/expressjs/morgan

// get route
app.get('/', (req, res) => res.send('ok'));

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));
