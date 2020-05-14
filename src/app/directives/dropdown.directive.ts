import { Directive, HostListener, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input('appDropdown') isOpen = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostBinding('style.height.px')
  get toggleDropdown() {
    if (this.isOpen) {
      console.log('Open!')
      return this.elRef.nativeElement.scrollHeight * 2;
    } else {
      console.log('Close!')
      return 0;
    }
  }
}
