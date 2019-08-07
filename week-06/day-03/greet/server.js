const express = require('express');

const app = express();
const PORT = 3002;

app.use(express.static('./day-03/greet'));

app.set('day-03/greet', 'ejs')

app.get('/', (req, res) => {
    res.sendFile('/index.js', {root: __dirname});
});


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});