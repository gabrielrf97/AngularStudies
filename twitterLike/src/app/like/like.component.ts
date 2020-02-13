import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('body') body : string = ""
  @Input('numberOfLikes') numberOfLikes : number = 0
  @Input('isLiked') isLiked : boolean = false

  onClick($event) {
    this.isLiked = !this.isLiked
    this.numberOfLikes += (this.isLiked) ? 1 : -1 
  }

}
