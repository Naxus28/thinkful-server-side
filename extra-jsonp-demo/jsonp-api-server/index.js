import express from 'express';
import fs from 'fs';
const app = express();
const PORT = process.env.PORT || 8080;
const data = fs.readFileSync('./MOCK_DATA.json', 'utf8');

// sends jsonp data back to the client -- keep in mind jsonp is a hack (widely used though)
// so if client is hosted on a different server (in this demo, http://localhost:5000)
// and makes an ajax request specifying the type to jsonp, the server will fulfill the request
// using CORS is cleaner but jsonp is also still supported by servers
app.get('/data', (req, res) => res.jsonp(JSON.parse(data)));

// listen for requests
app.listen(PORT, () => console.log(
  `Your app is listening on port ${PORT}`));

