import { Directive, ElementRef, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input('appDropdown') isOpen = false;

  constructor(
    private elRef: ElementRef,
  ) {}

  @HostBinding('style.height.px')
  get toggleDropdown() {
    if (this.isOpen) {
      return this.elRef.nativeElement.scrollHeight * 2;
    } else {
      return 0;
    }
  }
}
