import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppUnless]',
})
export class AppUnlessDirective {
  @Input() set appAppUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      console.log('View', this.viewContainer);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}
}
