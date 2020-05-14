import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appCloseSidebar]'
})
export class CloseSidebarDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('mousedown', ['$event'])
  onClick(event) {
    this.clickOutside.emit();
  }
}
