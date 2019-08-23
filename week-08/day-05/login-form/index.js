const express = require('express');
const app = express();
const PORT = 3000;
require('bootstrap')
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/send', (req, res) => {
  console.log(req.body.username);
  res.send('okay!');
});

app.listen(PORT, () => {
  console.log(`up and running (port: ${PORT}`);
});