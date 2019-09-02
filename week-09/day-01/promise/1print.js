'use strict';

function timeOutPrint() {
    setTimeout(print, 300);
}

function print(){
    console.log('TIMED OUT!');
}

timeOutPrint();

/* setTimeout(function () {
    console.log('TIMED OUT!');
  }, 300); */