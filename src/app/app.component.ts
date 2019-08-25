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
    new Describe('',"", '',new Date()),
  ];
}
