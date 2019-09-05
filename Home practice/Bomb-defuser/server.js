const express = require('express');
const app = express();
const PORT = 3000;
const request = require('supertest');

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/send', (req, res) => {
  res.send('okay!');
});

app.listen(PORT, () => {
  console.log(`up and running  on port: ${PORT}`);
});