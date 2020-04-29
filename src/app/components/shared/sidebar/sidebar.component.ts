import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isHidden: boolean;
  @Output() clickLink: EventEmitter<any> = new EventEmitter();

  links: any[] = [
    { path: '/home', name: 'HOME' },
    { path: '/beers', name: 'BEERS' },
    { path: '/about', name: 'ABOUT' }
  ];

  constructor() { }

  onClick() {
    this.clickLink.emit();
  }
}
