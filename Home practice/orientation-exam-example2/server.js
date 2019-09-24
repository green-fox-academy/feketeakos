'use strict'


const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'auction'
});

connection.connect(error => {
  if (error) {
    console.log(`cannot connect to database.`)
    return;
  }
  console.log('connection established.')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/items', (req, res) => {
  const items = `select * from itemdetails;`
  connection.query(items, (err, rows) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({
        items: rows
      });
    }
  });
})

app.post('/api/items/:id/bids', (req, res) => {
  const id = req.params.id;
  const amount = req.body.amount;
  const name = req.body.name;
  let data = [name, amount, id]
  connection.query(`select * from itemdetails where item_ID = ?`, id, (err, rows) => {
    if (err) {
      res.sendStatus(500);
    } else if (!rows[0]) {
      res.sendStatus(400);
    } else if (!name || !amount) {
      res.send({
        message: 'Some of the required parameter(s) might be missing.Check.'
      });
    } else if (isNaN(Number.parseInt(amount, 10))) {
      res.send({
        message: 'Amount format is unacceptable. Please numberize it.'
      });
    } else {
      if (new Date() > rows[0].expiryDate) {
        res.send({
          message: 'The auction is over!'
        });
      } else if (amount <= rows[0].highestBid) {
        res.send({
          message: 'Your bid is below the highest bid!'
        });
      } else {
        connection.query('UPDATE itemdetails SET highestBidderName = ?,highestBid = ? WHERE item_ID=?', data, (err, rows) => {
          if (err) {
            res.sendStatus(500);
          } else {
            res.send({
              message: 'Your bid was successful!'
            });
          }
        })
      }
    }
  })
})

app.listen(PORT, () => {
  console.log(`up and running  on port: ${PORT}`);
}); 