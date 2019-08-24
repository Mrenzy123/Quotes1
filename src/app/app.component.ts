import { Component } from '@angular/core';
import { Describe } from './describe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes1';
  
  quote: Describe []= [
    new Describe(1, 'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Describe(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Describe(3,'Get new Phone Case','Diana has her birthday coming up soon'),
  ];
}
