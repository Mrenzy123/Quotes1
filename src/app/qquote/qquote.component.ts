import { Component, OnInit , Input } from '@angular/core';
import { Describe } from '../describe';
@Component({
  selector: 'app-qquote',
  templateUrl: './qquote.component.html',
  styleUrls: ['./qquote.component.css']
})
export class QquoteComponent implements OnInit {
  quote: Describe []= [
    new Describe('',"",'',new Date()),
    
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(goal){
    let goalLength = this.quote.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.quote.push(goal)
  }
  constructor() { }

  ngOnInit() {
  }

}
