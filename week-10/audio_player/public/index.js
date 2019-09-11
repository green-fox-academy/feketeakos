'use strict';

let URL = '/playlists'
let TRACKS = '/alltracks'

fetch(TRACKS)
    .then(res => res.json())
    .then(res => alltracks(res))

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
};

function alltracks(alltracks) {
    for (let i = 0; i < alltracks.length; i++) {
        let newTrack = document.createElement('h4');
        document.getElementsByClassName('track_title')[0].appendChild(newTrack);
        let trackName = document.createElement('h4');
        trackName.innerHTML = alltracks[i];
        newTrack.appendChild(trackName);
    }
};

let addButton = document.getElementsByClassName('new')[0];
let deleteButton = document.getElementsByClassName('delete')[0];

addButton.addEventListener('click', addPlaylist);
deleteButton.addEventListener('click', deletePlaylist);

function addPlaylist() {
    const playListName = prompt('Provide a playlist name');
    fetch('/playlists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ playListName: playListName })
    })
        .then(response => response.text())
        .then(console.log)
}

function deletePlaylist() {
    const playListID = prompt('Provide a playlist ID');
    fetch('/playlists/:id', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ playListID: playListID })
    })
        .then(response => response.text())
        .then(console.log)
}


