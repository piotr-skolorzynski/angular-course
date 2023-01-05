import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHiglight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  //jeżeli zapodamy tą dyrektywę na jakimś elemencie to na dzień dobry zmodyfikuje jego tło na kolor zielony
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
