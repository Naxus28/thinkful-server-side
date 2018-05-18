import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

const getMadLib = (words) =>(
  `There's a ${words.adjective1} new ${words.name} in ${words.place} and everyone's talking. 
  Stunningly ${words.adjective2} and ${words.adverb} ${words.adjective3}, all the cool kids know it. 
  However, ${words.name} has a secret - ${words.name}'s a vile vampire.
  Will it end with a bite, or with a stake through the ${words.noun}?`
);

app.use(express.json());

app.post('/', (req, res) => res.send(getMadLib(req.body)));

app.listen(PORT, () => console.log(`Serving app on http://localhost:${PORT}`));