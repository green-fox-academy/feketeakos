'use strict'

const PORT = 3000;
const express = require('express');
const mysql = require('mysql');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'books'
});

app.use(express.json());

app.get('/books', function (req, res) {
  console.log(req.body);
  connection.query('SELECT * FROM book_mast', function (error, result) {
    if (error) {
      res.send(error.toString());
      return
    }
    res.send(result);
  })
})

app.post('/books', (req, res) => {
  const newBook = req.body;
  connection.query('INSERT INTO book_mast(book_id, book_name, isbn_no, cate_id, aut_id, pub_id, dt_of_pub,pub_lang,no_page,book_price ) VALUES(?,?,?,?,?,?,?,?,?,?)',
    [newBook.book_id, newBook.book_name, newBook.isbn_no, newBook.cate_id, newBook.aut_id, newBook.pub_id, newBook.dt_of_pub, newBook.pub_lang, newBook.no_page, newBook.book_price],
    function (error, result) {
      if (error) {
        res.send(error.toString());
        return
      }
      res.send(result);
    })
});

connection.connect(function (err) {
  if (err) {
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
});

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));