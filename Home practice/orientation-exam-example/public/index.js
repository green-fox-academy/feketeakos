'use strict';


const form = document.querySelector('form');
const url = document.getElementsByClassName('url')[0];
const alias = document.getElementsByClassName('alias')[0];

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(url.value, alias.value);
    fetch('/api/links',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            url : url.value,
            alias : alias.value
        })
    })
    .then(res => console.log('OK!'))
});