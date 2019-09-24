'use strict';
const genres = 'http://localhost:3001/genres'
const movies = 'http://localhost:3001/movies'
const genreButton = document.getElementById('genre')

fetch(genres)
.then(result => result.json())
.then(result => getMovies(result))

function getMovies(genres) {
    for (let i = 0; i < genres.length; i++) {
        const newGenre = document.createElement('option')
        newGenre.innerHTML = genres[i].Genre;
        newGenre.value = i + 1;
        genreButton.appendChild(newGenre);
    }
}

