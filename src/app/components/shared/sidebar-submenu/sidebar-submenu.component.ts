import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent {
  @Input() menu: any;


  constructor() {}


}
