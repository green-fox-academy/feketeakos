'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var hero_1 = require("./hero");
var monster_1 = require("./monster");
var boss_1 = require("./boss");
var hero = new hero_1.default(0, 0);
var monster1 = new monster_1.default(0, 0);
var monster2 = new monster_1.default(0, 0);
var monster3 = new monster_1.default(0, 0);
var boss = new boss_1.default(0, 0);
// Acquire the rendering context
var canvas = document.querySelector('.main-canvas');
var ctx = canvas.getContext('2d');
// Draw image
// Drawing a floor tile:
var map = [];
map[0] = [0, 0, 0, 1, 0, 1, 0, 0, 0, 0];
map[1] = [0, 0, 0, 1, 0, 1, 0, 1, 1, 0];
map[2] = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0];
map[3] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
map[4] = [1, 1, 1, 1, 0, 1, 1, 1, 1, 0];
map[5] = [0, 1, 0, 1, 0, 0, 0, 0, 1, 0];
map[6] = [0, 1, 0, 1, 0, 1, 1, 0, 1, 0];
map[7] = [0, 0, 0, 0, 0, 1, 1, 0, 1, 0];
map[8] = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
map[9] = [0, 0, 0, 1, 0, 1, 1, 0, 1, 0];
function nextIsWallR() {
    return map[hero.YPos][hero.XPos + 1] === 1;
}
function nextIsWallL() {
    return map[hero.YPos][hero.XPos - 1] === 1;
}
function nextIsWallU() {
    return map[hero.YPos - 1][hero.XPos] === 1;
}
function nextIsWallD() {
    return map[hero.YPos + 1][hero.XPos] === 1;
}
//Battle function starts here:
function getHeroPos() {
    console.log(hero.YPos, hero.XPos);
}
function battle() {
    if (hero.YPos === 8 && hero.XPos === 7) {
        console.log('Battletime!');
    }
}
//function heroPositioner() {
//    hero.XPos = map[j]
//}
function drawMap() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map.length; j++) {
            if (map[i][j] === 1) {
                var image = document.getElementById('wall');
                ctx.drawImage(image, j * 72, i * 72);
            }
            else {
                var image = document.getElementById('floor');
                ctx.drawImage(image, j * 72, i * 72);
            }
        }
    }
    hero.drawHero(0, 0);
    monster1.drawMonster(8, 8);
    monster2.drawMonster(0, 5);
    monster3.drawMonster(4, 0);
    boss.drawBoss(7, 0);
    getHeroPos();
    hero.statsHero();
    battle();
}
drawMap();
/*
/* You only have to change the argument string in document.getElementById('floor')
 *
 * Possible images:
 * - floor
 * - wall
 * - hero-up
 * - hero-right
 * - hero-down
 * - hero-left
 * - boss
 * - skeleton
 */
// Function to handle the key press events
function onKeyPress(event) {
    // Handle arrow keys
    switch (event.keyCode) {
        case 37:
            if (!nextIsWallL()) {
                drawMap();
                if (hero.XPos <= 0) {
                    hero.moveHeroL(0, hero.YPos);
                }
                else {
                    hero.XPos = hero.XPos - 1;
                    hero.moveHeroL(hero.XPos, hero.YPos);
                }
            }
            break;
        case 38:
            if (!nextIsWallU()) {
                drawMap();
                if (hero.YPos <= 0) {
                    hero.moveHeroU(hero.XPos, 0);
                }
                else {
                    hero.YPos = hero.YPos - 1;
                    hero.moveHeroU(hero.XPos, hero.YPos);
                }
            }
            break;
        case 39:
            if (!nextIsWallR()) {
                drawMap();
                if (hero.XPos > 8) {
                    hero.moveHeroR(hero.XPos, hero.YPos);
                }
                else {
                    hero.XPos = hero.XPos + 1;
                    hero.YPos === hero.YPos;
                    hero.moveHeroR(hero.XPos, hero.YPos);
                }
            }
            break;
        case 40:
            if (!nextIsWallD()) {
                drawMap();
                if (hero.YPos > 8) {
                    hero.moveHeroD(hero.XPos, hero.YPos);
                }
                else {
                    hero.YPos = hero.YPos + 1;
                    hero.moveHeroD(hero.XPos, hero.YPos);
                }
            }
            break;
    }
}
// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);
//# sourceMappingURL=index.js.map