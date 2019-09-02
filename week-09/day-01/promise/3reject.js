'use strict';
require('es6-promise');

var promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('REJECTED!')), 300)
});


function onReject(error){
    console.log(error.message)
}
promise.then(console.log, onReject);