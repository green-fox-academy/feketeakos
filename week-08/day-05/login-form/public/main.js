'use strict';
require('bootstrap')
const form = document.querySelector('form');
const username = document.querySelector('#username');

form.addEventListener('Login', e => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        alert('sent!!');
      } else {
        console.log('oh noes 😢');
      }
    }
  };
  xhr.open('POST', '/send');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ username: username.value }));
  form.reset();
});
