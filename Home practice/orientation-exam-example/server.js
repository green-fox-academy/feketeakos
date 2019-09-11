const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine','ejs');
/* const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'urls'
});
connection.connect() */

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.render('index');
});

app.post('/send', (req, res) => {
  res.send('okay!');
});

/* app.post('/api/links', (req, res) => {
    res.send
} */

app.listen(PORT, () => {
  console.log(`up and running  on port: ${PORT}`);
});