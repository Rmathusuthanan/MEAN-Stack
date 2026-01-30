import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    console.log('Element', el);
    console.log('Render', renderer);
  }

  ngOnInit() {
    console.log('HighlightDirective ngOnInit');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('focus')
  onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#fff3cd');
  }

  @HostListener('blur')
  onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
