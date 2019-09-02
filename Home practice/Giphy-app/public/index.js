'use strict';
let xhr = new XMLHttpRequest();

let parsedResult = {};
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      parsedResult = JSON.parse(xhr.responseText);
      createImages(parsedResult.data);
    } else {
      console.log('Something went wrong');
    }
  }
};

const createImages = xhr => {
  xhr.forEach(element => {
    let newImg = document.createElement('img');
    newImg.src = element.images.fixed_height_downsampled.url;
    newImg.alt = '#';
    newImg.height = 100;
    document.body.appendChild(newImg);
  });
};

xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=thug+life&api_key=CX37DQx1gb4OZON44eTtlHWOcpLpszvI&limit=16', true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send();