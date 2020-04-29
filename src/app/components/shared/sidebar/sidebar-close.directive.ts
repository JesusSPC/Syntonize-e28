import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[closeSidebar]'
})
export class CloseSidebarDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('mousedown', ['$event'])
  onClick(event) {
    this.clickOutside.emit();
  }
}
