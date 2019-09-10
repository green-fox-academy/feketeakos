'use strict';

let URL = 'localhost3000/playlists'

fetch(URL)
    .then(answer => answer.json())
    .then(render);

function render(playlists) {
    for (let i = 0; i < playlists.length; i++) {
        let newPlaylist = document.createElement('div');
        document.getElementsByClassName('playlists')[0].appendChild(newPlaylist);
        let trackId = document.createElement('div');
        trackId.innerHTML = data[i].id;
        newPlaylist.appendChild(trackId);
        let trackName = document.createElement('div');
        trackName.innerHTML = data[i].title;
        newPlaylist.appendChild(trackName);
    }
}