'use strict';
const URL = 'http://secure-reddit.herokuapp.com/simple/posts';

console.log('szia norbi');

fetch(URL)
  .then(answer => answer.json())
  .then(render);



function render(data) {
  for (let i = 0; i < data.posts.length; i++) {
    let tehen = document.createElement('div');
    document.querySelector('posts').appendChild(tehen)
    let kutya = document.createElement('h1');
    kutya.innerHTML = data.posts[i].title;
    tehen.appendChild(kutya);
    let macska = document.createElement('h2');
    macska.innerHTML = data.posts[i].url;
    tehen.appendChild(macska);
  }
}