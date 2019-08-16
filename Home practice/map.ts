'use stirct';

let myBook: Object = {};

myBook['978-1-60309-452-8'] = 'A Letter to Jo';
myBook['978-1-60309-459-7'] = 'Lupus';
myBook['978-1-60309-444-3'] = 'Red Panda and Moon Bear';
myBook['978-1-60309-461-0'] = 'The Lab';

Object.keys(myBook).forEach(function (value) {
    console.log(myBook[value] + ' (ISBN: ' + value + ')');
});
