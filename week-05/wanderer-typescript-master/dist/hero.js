'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var characters_1 = require("./characters");
var canvas = document.querySelector('.main-canvas');
var ctx = canvas.getContext('2d');
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(XPos, YPos, maxHP, currentHP, maxDP, currentDP, maxSP, currentSP, X, d6) {
        if (maxHP === void 0) { maxHP = 10; }
        if (currentHP === void 0) { currentHP = 20 + 3 * (Math.floor(Math.random() * 10) + 6); }
        if (maxDP === void 0) { maxDP = 10; }
        if (currentDP === void 0) { currentDP = 2 * (Math.floor(Math.random() * 10) + 6); }
        if (maxSP === void 0) { maxSP = 10; }
        if (currentSP === void 0) { currentSP = 5 + (Math.floor(Math.random() * 10) + 6); }
        return _super.call(this, maxHP, currentHP, maxDP, currentDP, maxSP, currentSP, XPos, YPos, X, d6) || this;
    }
    Hero.prototype.drawHero = function (XPos, YPos) {
        var image = document.getElementById('hero-down');
        ctx.drawImage(image, XPos * 72, YPos * 72);
    };
    Hero.prototype.moveHeroD = function (XPos, YPos) {
        var image = document.getElementById('hero-down');
        ctx.drawImage(image, XPos * 72, YPos * 72);
    };
    Hero.prototype.moveHeroR = function (XPos, YPos) {
        var image = document.getElementById('hero-right');
        ctx.drawImage(image, XPos * 72, YPos * 72);
    };
    Hero.prototype.moveHeroL = function (XPos, YPos) {
        var image = document.getElementById('hero-left');
        ctx.drawImage(image, XPos * 72, YPos * 72);
    };
    Hero.prototype.moveHeroU = function (XPos, YPos) {
        var image = document.getElementById('hero-up');
        ctx.drawImage(image, XPos * 72, YPos * 72);
    };
    Hero.prototype.statsHero = function () {
        ctx.font = '25px bold Arial';
        ctx.fillStyle = 'black';
        ctx.fillText("Hero (Level " + 1 + ")   HP: " + this.currentHP + "/" + this.maxHP + " | DP: " + this.currentDP + " | SP: " + this.currentSP, canvas.width / 5, 750);
    };
    return Hero;
}(characters_1.default));
exports.default = Hero;
//# sourceMappingURL=hero.js.map