'use strict';
require('es6-promise');

let promise = new Promise(function (resolve, reject) {
    reject(new Error('SECRET VALUE'));
  });

Promise.resolve(console.log);
promise.catch(console.log)