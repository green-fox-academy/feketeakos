'use strict';

const picArray = [
    {
        path: 'https://images.wallpaperscraft.com/image/lama_muzzle_ears_112760_2560x1440.jpg',
        title: 'Láma',
        text: 'A Lama az emlősök (Mammalia) osztályának párosujjú patások (Artiodactyla) rendjébe, ezen belül a tevefélék (Camelidae) családjába tartozó típusnem.'
    },
    {
        path: 'https://resize.hswstatic.com/w_907/gif/hedgehog-pet.jpg',
        title: 'Sün',
        text: 'A sünfélék az emlősök osztályának és az Eulipotyphla rendjének egyik családja. A régebbi rendszertani besorolások szerint a rovarevők rendjébe, aztán pedig rövid ideig a saját sünalakúak rendjébe tartozott. '
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
        title: 'Kacsacsőrű emlős',
        text: 'A kacsacsőrű emlős (Ornithorhynchus anatinus) az emlősök (Mammalia) osztályának a kloákások (Monotremata) rendjébe és a kacsacsőrű emlősök (Ornithorhynchidae) családjába tartozó egyetlen élő faj.'
    },
];
function show_image(imgNumber) {
    var img = document.createElement("img");
    img.src = picArray[imgNumber].path;
    img.width = 711;
    img.height = 400;
    document.getElementsByClassName("flex-picture")[0].appendChild(img);
}
const arrowR = document.getElementsByTagName("li")[0]
arrowR.addEventListener('click', function() {
    show_image(0)
});

show_image(5)