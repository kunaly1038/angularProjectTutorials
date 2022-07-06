import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElDirective]'
})
export class RedElDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
   }


}
