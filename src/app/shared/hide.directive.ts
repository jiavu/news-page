
/*
Ok ziemlich unnötig... Die *appHide würde wohl das gleiche machen wie *ngIf...

Probably unused.

*/

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  @Input() set appHide(hide: boolean) {
    if (!hide) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}

}
