import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    this.textColor = 'inherit';
  }
}
