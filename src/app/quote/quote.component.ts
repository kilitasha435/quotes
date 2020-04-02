// import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent implements OnInit {
  // title = 'these are wise quotes';
  // quotes: Quote[] = [
  //   new Quote(1,'Author Holly','Love', "Love yourself unconditionally first,then everything else is manageable.", 'Kevin Kili',new Date(2019,12,25)),
  //   new Quote(2,'Anonymous',"You are not lost, you are just early in the process", 'Eleanor Bwire',new Date(2019,5,17)),
  //   new Quote(3,'Barack Obama','Never let an old flame burn you', 'Sheila',new Date(2020,1,23)),
  //   new Quote(4,'Tasha','It is not over unit it is all over','Eleanor',new Date(2019,8,21)),

  // ];
  // quotes:Quote[] = [
  //   new Quote (1,'Charles','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12),0,0),
  //   new Quote (2,'Wendy','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14),0,0),
  //   new Quote (3,'Mikey','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2019,6,3),0,0),
  //   new Quote (4,'Beatrice','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7),0,0),
  //   new Quote (5,'Charles','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2019,7,17),0,0),
  //   new Quote (6,'Alfred','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15),0,0)
  // ];

//   toggleDetails(index){
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }

//   boringQuote(isBoring, index){
//     if (isBoring) {
//       let toBoring = confirm('Are you sure you want to delete this quote')

//       if(toBoring){
//         this.quotes.splice(index,1);
//       }
     
//     }
//   }

//   addNewQuote(quote){
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength+1;
//     quote.publishDate = new Date(quote.publishDate)
//     this.quotes.push(quote)
//   }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }



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