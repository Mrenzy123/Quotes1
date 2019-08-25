import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor="lightblue"
   }

  // private textDeco(action:string){
  //   this.elem.nativeElement.style.textDecoration=action;

  // }
}
