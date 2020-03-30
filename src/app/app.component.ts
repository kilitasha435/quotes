import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(1,'Author Holly', "Love yourself unconditionally first,then everything else is manageable.", 'Kevin Kili',new Date(2019,12,25)),
    new Quote(2,'Anonymous',"You are not lost, you are just early in the process", 'Eleanor Bwire',new Date(2019,5,17)),
    new Quote(3,'Barack Obama','Never let an old flame burn you', 'Stacy',new Date(2020,1,23)),

  ];
}
