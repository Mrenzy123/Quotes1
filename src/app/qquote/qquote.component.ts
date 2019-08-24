import { Component, OnInit , Input } from '@angular/core';
import { Describe } from '../describe';
@Component({
  selector: 'app-qquote',
  templateUrl: './qquote.component.html',
  styleUrls: ['./qquote.component.css']
})
export class QquoteComponent implements OnInit {
  quote: Describe []= [
    new Describe(1, 'Watch finding Nemo','Find an online version and watch merlin find his son',new Date(2019,6,9)),
    new Describe(2,'Buy Cookies','I have to buy cookies for the parrot' ,new Date(2019,6,9)),
    new Describe(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,6,9)),
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
