'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var hero_1 = require("./hero");
var hero = new hero_1.default(0, 0);
var canvas = document.querySelector('.main-canvas');
var ctx = canvas.getContext('2d');
var Map = /** @class */ (function () {
    function Map(map) {
        this.map = [];
        this.map = map;
    }
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=map.js.map