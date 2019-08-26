import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { Describe } from '../describe';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input() goal: Describe;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  likes= 0;
  dislikes= 0;

  totalLikes(){
    this.likes++
  }

  totalDislikes(){
    this.dislikes++
  }


  constructor() { }

  ngOnInit() {
  }

}
