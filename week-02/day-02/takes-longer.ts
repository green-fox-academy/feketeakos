'use script'

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let insert: string = 'always takes longer than';

let index: string = ' even'

let beszuras = function (quote, index, insert) {
    return quote.substr(0, 21) + insert + quote.substr(20);
}
console.log(beszuras(quote, index, insert));