import { Component, Output, EventEmitter, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() open: boolean;

  @HostBinding('class.nav-menu') css = 'nav-menu';

  @HostBinding('class.open-menu')
    get hidden() {
      return this.open;
    }

  @Output() clickSidebar = new EventEmitter<any>();
}
