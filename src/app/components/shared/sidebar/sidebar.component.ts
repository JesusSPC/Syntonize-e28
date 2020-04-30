import { Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @HostBinding('class') css = 'nav-menu';

  @HostBinding('class.open-menu')
    get hidden() {
      return this.open;
    }

  @Input() open: boolean;

  @Output() clickSidebar = new EventEmitter<any>();
}
