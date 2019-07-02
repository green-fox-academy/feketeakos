'use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let bots = /bots/gi;
let missing: string = ':'
let httpFix: string = url.replace(/https/g, 'https:');
let rightUrl = httpFix.replace(bots, "odds");

console.log(rightUrl);