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
var Boss = /** @class */ (function (_super) {
    __extends(Boss, _super);
    function Boss(XPos, YPos, maxHP, currentHP, // X is missing instead of 1 !!!
    maxDP, currentDP, // X is missing instead of 1 !!!
    maxSP, currentSP, // X is missing instead of 1 !!!
    X, d6) {
        if (currentHP === void 0) { currentHP = 2 * 1 * (Math.floor(Math.random() * 10) + 6) + (Math.floor(Math.random() * 10) + 6); }
        if (currentDP === void 0) { currentDP = 1 / 2 * (Math.floor(Math.random() * 10) + 6) + (Math.floor(Math.random() * 10) + 6) / 2; }
        if (currentSP === void 0) { currentSP = 1 * (Math.floor(Math.random() * 10) + 6) * 1; }
        return _super.call(this, maxHP, currentHP, maxDP, currentDP, maxSP, currentSP, XPos, YPos, X, d6) || this;
    }
    Boss.prototype.drawBoss = function (XPos, YPos) {
        var image = document.getElementById('boss');
        ctx.drawImage(image, XPos * 72, YPos * 72);
    };
    return Boss;
}(characters_1.default));
exports.default = Boss;
//# sourceMappingURL=boss.js.map