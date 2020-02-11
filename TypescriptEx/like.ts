export class Like {
    constructor(public _likeQuantity:number, public _hasLiked?:boolean) {}

    likePressed() {
       this._likeQuantity += this._hasLiked ? -1 : 1
       this._hasLiked = !this._hasLiked
    }
}