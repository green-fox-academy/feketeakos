'use strict';
require('es6-promise');

var promise = new Promise(function (resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
    console.log(error.message)
}

promise.then(console.log, onReject)