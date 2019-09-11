'use strict';

let URL = '/playlists'

fetch(URL)
.then(res => res.json())
.then(res => render(res))

function render(playlists) {
    for (let i = 0; i < playlists.length; i++) {
        let newPlaylist = document.createElement('p');
        document.getElementsByClassName('playlist_name')[0].appendChild(newPlaylist);
        let trackName = document.createElement('p');
        let addButton = document.createElement('button')
        addButton.innerHTML = '+'
        trackName.innerHTML = playlists[i].Title;
        newPlaylist.appendChild(trackName);
        newPlaylist.appendChild(addButton);
    }
}

let addButton = document.getElementsByClassName('new')[0]

addButton.addEventListener('click', addPlaylist);

function addPlaylist() {
    const playListName = prompt('Provide a playlist name');
    fetch('/playlists', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({playListName: playListName})})  
    .then(response => response.text())
    .then(console.log)
}

function deletePlaylist() {
    const playListName = prompt('Provide a playlist ID');
    fetch('/playlists', { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({playListName: playListName})})  
    .then(response => response.text())
    .then(console.log)
}