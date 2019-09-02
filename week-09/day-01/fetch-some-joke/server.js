const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.listen(PORT, () => {
  console.log(`up and running  on port: ${PORT}`);
});