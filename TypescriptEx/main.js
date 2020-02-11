"use strict";
exports.__esModule = true;
var like_1 = require("./like");
var like = new like_1.Like(139, true);
like.likePressed();
console.log("Num of likes " + like._likeQuantity + ", User has liked: " + like._hasLiked);
