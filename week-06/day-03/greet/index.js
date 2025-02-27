const express = require('express');
const app = express();
const PORT = 3002;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
        res.render('home', { name: req.query.name || 'Guest' });
    });

// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});