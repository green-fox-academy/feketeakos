const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const fs = require('fs');

app.get('/alltracks', (req, res) => {
  const files = fs.readdirSync('./music');
  res.send(files).body
});
/* var fs = require('fs');
var mm = require('musicmetadata');
 
var parser = mm(fs.createReadStream('./public/test.mp3'), function (err, metadata) {
  if (err) throw err;
  console.log(metadata);
});
 */
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'playlists'
});
connection.connect()

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
  connection.query('SELECT * FROM playlist;', function (error, result) {
    if (error) {
      console.log(error)
    } else {
      res.send(result)
    }
  })
});

app.post('/playlists', (req, res) => {
  const playList = req.body.playListName
  connection.query('INSERT INTO playlist (Title) VALUES (?)', playList)
})

app.delete('/playlists/:id', (req, res) => {
  const playListID = req.body.playListID
  connection.query('DELETE FROM playlist WHERE Id=' + playListID)
});
/* 
app.post('/send', (req, res) => {
  res.send('okay!');
});
 */
app.listen(PORT, () => {
  console.log(`up and running  on port: ${PORT}`);
});