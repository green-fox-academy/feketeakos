'use strict'

const bidButton = document.getElementById('bid')
const name = document.getElementsByClassName('name')[0];
const amount = document.getElementsByClassName('amount')[0];

const loadData = () => {
    fetch('/api/items')
        .then(response => response.json())
        .then(response => {
            getItems(response)
            return response;
        })
        .then(response => displayBids(response))
}
window.onload = loadData;

function getItems(data) {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
        const option = document.createElement('option');
        const select = document.querySelector('select');
        option.text = `${items[i].title}`;
        option.value = `${items[i].item_ID}`;
        select.appendChild(option);
    }
}

function displayBids(data) {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
        let newRow = document.createElement('h6');
        document.getElementsByTagName('h3')[0].appendChild(newRow);
        newRow.innerHTML =
            `Title: ${items[i].title} <div>
            Highest bid: ${items[i].highestBid} <div> 
            Highest bidder: ${items[i].highestBidderName}`;
    }
}
bidButton.addEventListener('click', e => {
    e.preventDefault();
    const id = document.getElementById('dropdown').value;
    if (!id || id === undefined) {
        console.log('Please give a valid id!')
        return
    }
    fetch(`/api/items/${id}/bids`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            name: document.querySelectorAll("input")[0].value,
            amount: document.querySelectorAll("input")[1].value
        })
    })
        .then(response => response.json())
        .then(response => {
            document.querySelector('p').textContent = response.message;
            if (response.message === 'Your bid was successful!') {
                document.querySelector('form').reset();
            }
            return;
        })

});