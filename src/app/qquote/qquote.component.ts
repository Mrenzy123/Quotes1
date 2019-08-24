import { Component, OnInit , Input } from '@angular/core';
import { Describe } from '../describe';
@Component({
  selector: 'app-qquote',
  templateUrl: './qquote.component.html',
  styleUrls: ['./qquote.component.css']
})
export class QquoteComponent implements OnInit {
  quote: Describe []= [
    new Describe(1, 'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Describe(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Describe(3,'Get new Phone Case','Diana has her birthday coming up soon'),
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
