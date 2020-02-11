import {Like} from "./like";

var like = new Like(139, true);
like.likePressed();
console.log(`Num of likes ${like._likeQuantity}, User has liked: ${like._hasLiked}`)