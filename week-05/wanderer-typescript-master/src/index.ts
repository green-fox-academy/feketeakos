'use strict';
import Hero from './hero';
import Monster from './monster';
import Boss from './boss';
import Map from './map';
let hero: Hero = new Hero(0, 0)
let monster1: Monster = new Monster(8, 8)
let monster2: Monster = new Monster(0, 5)
let monster3: Monster = new Monster(4, 0)
let boss: Boss = new Boss(0, 0);

// Acquire the rendering context
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// Drawing a floor tile:

let map: number[][] = []
map[0] = [0, 0, 0, 1, 0, 1, 0, 0, 0, 0]
map[1] = [0, 0, 0, 1, 0, 1, 0, 1, 1, 0]
map[2] = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
map[3] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
map[4] = [1, 1, 1, 1, 0, 1, 1, 1, 1, 0]
map[5] = [0, 1, 0, 1, 0, 0, 0, 0, 1, 0]
map[6] = [0, 1, 0, 1, 0, 1, 1, 0, 1, 0]
map[7] = [0, 0, 0, 0, 0, 1, 1, 0, 1, 0]
map[8] = [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
map[9] = [0, 0, 0, 1, 0, 1, 1, 0, 1, 0]

function nextIsWallR(): boolean {
    return map[hero.YPos][hero.XPos + 1] === 1;
}

function nextIsWallL(): boolean {
    return map[hero.YPos][hero.XPos - 1] === 1;
}

function nextIsWallU(): boolean {
    return map[hero.YPos - 1][hero.XPos] === 1;
}

function nextIsWallD(): boolean {
    return map[hero.YPos + 1][hero.XPos] === 1;
}

function getHeroPos() {
    console.log(hero.YPos, hero.XPos);
}
//Battle function starts here:
function battle(): void {
    if (hero.XPos === monster1.XPos && hero.YPos === monster1.YPos ||
        hero.XPos === monster2.XPos && hero.YPos === monster2.YPos ||
        hero.XPos === monster3.XPos && hero.YPos === monster3.YPos) {
        console.log('It\'s battletime you motherfucka\'!');
        strike();
    }
}
function strike() {
    let SV: number = hero.currentSP * (Math.floor(Math.random() * 10) + 6) * 2;
    if (SV > monster1.currentHP || SV > monster2.currentHP || SV > monster3.currentHP) {

    }
}

function drawMap() {
    for (let i: number = 0; i < map.length; i++) {
        for (let j: number = 0; j < map.length; j++) {
            if (map[i][j] === 1) {
                let image = document.getElementById('wall') as HTMLImageElement;
                ctx.drawImage(image, j * 72, i * 72);
            } else {
                let image = document.getElementById('floor') as HTMLImageElement;
                ctx.drawImage(image, j * 72, i * 72);
            }
        }
    }
    monster1.drawMonster(8, 8);
    monster2.drawMonster(0, 5);
    monster3.drawMonster(4, 0);
    boss.drawBoss(7, 0);
    hero.statsHero();
}
drawMap()
hero.drawHero(0, 0);

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

function onKeyPress(event: any) {
    // Handle arrow keys
    switch (event.keyCode) {
        case 37:
            if (!nextIsWallL()) {
                drawMap()
                if (hero.XPos <= 0) {
                    hero.moveHeroL(0, hero.YPos)
                } else {
                    hero.XPos--
                    hero.moveHeroL(hero.XPos, hero.YPos)
                    getHeroPos();
                    battle();
                }
            }
            break;
        case 38:
            if (!nextIsWallU()) {
                drawMap()
                if (hero.YPos <= 0) {
                    hero.moveHeroU(hero.XPos, 0)
                } else {
                    hero.YPos--
                    hero.moveHeroU(hero.XPos, hero.YPos)
                    getHeroPos();
                    battle();
                }
            }
            break;
        case 39:
            if (!nextIsWallR()) {
                drawMap()
                if (hero.XPos > 8) {
                    hero.moveHeroR(hero.XPos, hero.YPos)
                } else {
                    hero.XPos++
                    hero.moveHeroR(hero.XPos, hero.YPos)
                    getHeroPos();
                    battle();
                }
            }
            break;

        case 40:
            if (!nextIsWallD()) {
                drawMap()
                if (hero.YPos > 8) {
                    hero.moveHeroD(hero.XPos, hero.YPos)
                } else {
                    hero.YPos++
                    hero.moveHeroD(hero.XPos, hero.YPos)
                    getHeroPos();
                    battle();
                }
            }
            break;
    }
}

// Listen on pressing the keys

document.body.addEventListener('keydown', onKeyPress);