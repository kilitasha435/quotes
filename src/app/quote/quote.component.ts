import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'these are the wise quotes';
  quotes: Quote[] = [
    new Quote(1,'"Love yourself unconditionally first,then everything else is manageable.', "Author Holly ", 'Kevin Kili',new Date(2019,12,25)),
    new Quote(2,'"You are not lost, you are just early in the process',"Paul Gichuki", 'Eleanor Bwire',new Date(2019,5,17)),
    new Quote(3,'"Never let an old flame burn you','Eleanor', 'Sheila',new Date(2020,1,23)),
    new Quote(4,'"It is not over unit it is all over','Tasha','Eleanor',new Date(2019,8,21)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  // numberOfDislikes : number = 0;
  // dislikeButtonClick() {
  //   this.numberOfDislikes++;
  // }
  // numberOfLikes : number = 0;
  // likeButtonClick() {
  //   this.numberOfLikes++;
  // }
 
 
  boringQuote(isBoring, index){
    if (isBoring) {
      let toBoring = confirm('Are you sure you want to delete this quote')

      if(toBoring){
        this.quotes.splice(index,1);
      }
     
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}