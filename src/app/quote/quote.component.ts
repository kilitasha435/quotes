import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Author Holly', "Love yourself unconditionally first,then everything else is manageable.", 'Kevin Kili',new Date(2019,12,25)),
    new Quote(2,'Anonymous',"You are not lost, you are just early in the process", 'Eleanor Bwire',new Date(2019,5,17)),
    new Quote(3,'Barack Obama','Never let an old flame burn you', 'Sheila',new Date(2020,1,23)),
    new Quote(4,'Tasha','It is not over unit it is all over','Eleanor',new Date(2019,8,21)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

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
