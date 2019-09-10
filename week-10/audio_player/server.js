const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

app.get('/playlist-tracks', (req, res) => {
  res.json();
});

app.get('/playlists', (req, res) => {
  res.json([
    { "id": 1, "title": "Favorites", "system": 1 },
    { "id": 2, "title": "Music for programming", "system": 0 },
    { "id": 3, "title": "Driving", "system": 0 },
    { "id": 5, "title": "Fox house", "system": 0 },
  ]);
});
/* 
app.post('/send', (req, res) => {
  res.send('okay!');
});
 */
app.listen(PORT, () => {
  console.log(`up and running  on port: ${PORT}`);
});