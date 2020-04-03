import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'like-box',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() testName: number;

  numberOfLikes : number = 0;
  likeButtonClick() {
    this.numberOfLikes++;
  }

  numberOfDislikes : number = 0;
  dislikeButtonClick() {
    this.numberOfDislikes++;
  }

  constructor() { }

  ngOnInit() {
  }

}