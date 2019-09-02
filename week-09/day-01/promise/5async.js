'use strict';
require('es6-promise');

let promise = new Promise(function (resolve, reject) {
    resolve('PROMISE VALUE');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
    console.log(error.message)
}

promise.then(console.log, onReject)

console.log('MAIN PROGRAM');