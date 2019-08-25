import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Describe } from '../describe';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  newQuote = new Describe("","","",new Date());
  @Output() addMyQuote = new EventEmitter<Describe>();
  
  PostQuote(){
    this.addMyQuote.emit(this.newQuote);
      }
  constructor() { }

  ngOnInit() {
  }

}
