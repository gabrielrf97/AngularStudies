"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_likeQuantity, _hasLiked) {
        this._likeQuantity = _likeQuantity;
        this._hasLiked = _hasLiked;
    }
    Like.prototype.likePressed = function () {
        this._likeQuantity += this._hasLiked ? -1 : 1;
        this._hasLiked = !this._hasLiked;
    };
    return Like;
}());
exports.Like = Like;
