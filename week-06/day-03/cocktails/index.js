const express = require('express');
const app = express();
const PORT = 3000;
const cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

app.use(express.static('static'));
// set the view engine to ejs
app.set('view engine', 'ejs');

function alcoholFilter(alcoholType) {
    let filtered = []
    if (!alcoholType) {
        return cocktails
    } else {
        for (let i = 0; i < cocktails.length; i++) {
            for (let j = 0; j < cocktails[i].contains.length; j++) {
                if (cocktails[i].contains[j] === alcoholType) {
                    filtered.push(cocktails[i])
                }
            }
        }
        return filtered
    }
}

let alcoholList = ['gin', 'vodka', 'rum', 'tequila']
// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    let filteredAdfgcvbnvgf
    res.render('home', { alcoholList: alcoholList,
                        cocktails: alcoholFilter(req.query.alcoholType) })
})
    ;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});