'use strict';
import Hero from './hero'
import Map from './map'
let hero: Hero = new Hero(0, 0)
// Acquire the rendering context
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw image

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

function nextIsWall(): boolean {
    if (map[hero.XPos][hero.YPos + 1] === 1) {
        return true
    } else {
        return false
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
}
drawMap()
hero.drawHero(0, 0)

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
            drawMap()
            if (hero.XPos <= 0) {
                hero.moveHeroL(0, hero.YPos)
            } else {
                hero.XPos = hero.XPos - 1
                hero.moveHeroL(hero.XPos, hero.YPos)
            }
            break;
        case 38:
            drawMap()
            if (hero.YPos <= 0) {
                hero.moveHeroU(hero.XPos, 0)
            } else {
                hero.YPos = hero.YPos - 1
                hero.moveHeroU(hero.XPos, hero.YPos)
            }
            break;
        case 39:
            if (nextIsWall() === false) {
               console.log(nextIsWall())
               console.log(hero.XPos, hero.YPos);
               drawMap()
                if (hero.XPos > 8) {
                    hero.moveHeroR(hero.XPos, hero.YPos)
                } else {
                    hero.XPos = hero.XPos + 1
                    hero.YPos === hero.YPos
                    hero.moveHeroR(hero.XPos, hero.YPos)
                }
            }
            break;

        case 40:
            drawMap()
            if (hero.YPos > 8) {
                hero.moveHeroD(hero.XPos, hero.YPos)
            } else {
                hero.YPos = hero.YPos + 1
                hero.moveHeroD(hero.XPos, hero.YPos)
            }
            break;
    }
}

// Listen on pressing the keys

document.body.addEventListener('keydown', onKeyPress);