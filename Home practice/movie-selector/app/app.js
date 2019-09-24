const express = require('express');
const app = express();
const mysql = require('mysql');
app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('static'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movies'
});

connection.connect(error => {
    if (error) {
        console.log(`cannot connect to database.`)
        return;
    }
    console.log('connection established.')
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' });
});

app.get('/genres', (req, res) => {
    connection.query('SELECT DISTINCT Genre FROM movies;', function (error, result) {
        if (error) {
            res.sendStatus(500)
            res.json({ "message": "Something went wrong" });
        } else {
            res.send(result);
        }
    })
});

app.get('/movies', (req, res) => {
    connection.query('SELECT * FROM movies;', function (error, result) {
        if (error) {
            res.sendStatus(500)
            res.json({ "message": "Something went wrong" });
        } else {
            res.send(result);
        }
    })
});

module.exports = app;