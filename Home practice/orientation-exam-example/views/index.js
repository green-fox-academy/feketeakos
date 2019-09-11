'use strict';

let URL = '/'

fetch(URL)
    .then(answer => answer.json())
    .then(render);