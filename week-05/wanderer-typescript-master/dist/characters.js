'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Characters = /** @class */ (function () {
    function Characters(maxHP, currentHP, maxDP, currentDP, maxSP, currentSP, XPos, YPos, X, d6) {
        this.X = 0;
        this.d6 = Math.floor(Math.random() * 10) + 6;
        this.currentHP = currentHP;
        this.maxHP = maxHP;
        this.currentDP = currentDP;
        this.maxDP = maxDP;
        this.maxSP = maxSP;
        this.currentSP = currentSP;
        this.XPos = XPos;
        this.YPos = YPos;
        this.X = X;
        this.d6 = d6;
    }
    return Characters;
}());
exports.default = Characters;
//# sourceMappingURL=characters.js.map