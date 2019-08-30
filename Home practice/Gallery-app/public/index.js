'use strict';

const picArray = [
    {
        path: 'https://images.wallpaperscraft.com/image/lama_muzzle_ears_112760_2560x1440.jpg',
        title: 'Láma',
        text: 'A Lama az emlősök (Mammalia) osztályának párosujjú patások (Artiodactyla) rendjébe, ezen belül a tevefélék (Camelidae) családjába tartozó típusnem.'
    },
    {
        path: 'https://resize.hswstatic.com/w_907/gif/hedgehog-pet.jpg',
        title: 'Fahéj',
        text: 'Jó nagyokat szarik, általában nehezen lemosható helyekre. Mi mást mondhatnék? Egy szargyár. '
    },
    {
        path: 'https://mult-kor.hu/image/article/main/.630x1260/38480.jpg',
        title: 'Nyúl',
        text: 'A nyúlfélék (Leporidae) az emlősök (Mammalia) osztályába és a nyúlalakúak (Lagomorpha) rendjébe tartozó család.'
    },
    {
        path: 'https://thehappypuppysite.com/wp-content/uploads/2019/02/Border-Collie-Temperament-long.jpg',
        title: 'Border Collie',
        text: 'Közepes termetű, intelligens pásztorkutya. Feje elkeskenyedő, szeme sötétbarna, a felemás szemszín csak merlék esetén megengedett.'
    },
    {
        path: 'https://i.ytimg.com/vi/jioFlG_kVNE/maxresdefault.jpg',
        title: 'Német juhász',
        text: 'A német juhászkutya (gyakran csak németjuhász) Németországból származó nagy termetű kutyafajta. Okos, kedves, játékos kutya, és mindemellett hűséges társ.'
    },
    {
        path: 'https://www.hirado.hu/file/sites/7/2016/01/Tengeri-vidra-e1452608675377.jpg',
        title: 'Vidra',
        text: 'Az európai vidra, vagy gyakran csak röviden vidra (Lutra lutra) részben vízben élő ragadozó emlősállat.'
    },
    {
        path: 'https://cdn.nwmgroups.hu/s/img/i/1505/20150518kacsacsoru-emlos1.jpg',
        title: 'Platypus',
        text: 'A kacsacsőrű emlős (Ornithorhynchus anatinus) a kacsacsőrű emlősök (Ornithorhynchidae) családjába tartozó egyetlen élő faj.'
    },
];
let imageNumber = picArray.indexOf(0) + 1;
let img = document.createElement("img");
document.querySelector('h2').textContent = `${picArray[0].title}`;
document.querySelector('p').textContent = `${picArray[0].text}`;

function show_image(imageNumber) {
    img.src = picArray[imageNumber].path;
    img.width = 711;
    img.height = 400;
    document.getElementsByClassName("flex-picture")[0].appendChild(img);
}

const imgList = document.querySelector('.thumbnails');

function showThumbs() {
    for (let i = 0; i < picArray.length; i++) {
        let thumb = document.createElement('img');
        thumb.src = picArray[i].path;
        thumb.className = 'thumbnails'
        thumb.width = 771 / picArray.length;
        thumb.height = 84;
        imgList.appendChild(thumb);
        thumb.addEventListener('click', function () {
            show_image(i);
            document.querySelector('h2').textContent = `${picArray[i].title}`;
            document.querySelector('p').textContent = `${picArray[i].text}`;
            /* ('.selected').remo
            thumb.classList.add('selected') */
            /*  thumb.classList.toggle("selected"); */
            /*  document.querySelectorAll.classList.remove('selected');
              thumb.classList.add('selected');  */
        });
    }
}


function previousImage() {
    if (imageNumber === 0) {
        img.src = picArray[picArray.length - 1].path;
        img.width = 711;
        img.height = 400;
        let item = document.getElementsByClassName("flex-picture")[0]
        item.replaceChild(img, img);
        document.querySelector('h2').textContent = `${picArray[picArray.length - 1].title}`;
        document.querySelector('p').textContent = `${picArray[picArray.length - 1].text}`;
        imageNumber = picArray.length - 1
    } else {
        img.src = picArray[imageNumber - 1].path;
        img.width = 711;
        img.height = 400;
        let item = document.getElementsByClassName("flex-picture")[0]
        item.replaceChild(img, img);
        document.querySelector('h2').textContent = `${picArray[imageNumber - 1].title}`;
        document.querySelector('p').textContent = `${picArray[imageNumber - 1].text}`;
        imageNumber--;
    }
}

function nextImage() {
    if (imageNumber === picArray.length - 1) {
        img.src = picArray[0].path;
        img.width = 711;
        img.height = 400;
        let item = document.getElementsByClassName("flex-picture")[0]
        item.replaceChild(img, img);
        document.querySelector('h2').textContent = `${picArray[0].title}`;
        document.querySelector('p').textContent = `${picArray[0].text}`;
        imageNumber = 0;
    } else {
        img.src = picArray[imageNumber + 1].path;
        img.width = 711;
        img.height = 400;
        let item = document.getElementsByClassName("flex-picture")[0]
        item.replaceChild(img, img);
        document.querySelector('h2').textContent = `${picArray[imageNumber + 1].title}`;
        document.querySelector('p').textContent = `${picArray[imageNumber + 1].text}`;
        imageNumber++;
    }
}

const arrowL = document.getElementById("0");
arrowL.addEventListener('click', function () {
    previousImage()
});

const arrowR = document.getElementById("1");
arrowR.addEventListener('click', function () {
    nextImage()
});


show_image(0)
showThumbs()
