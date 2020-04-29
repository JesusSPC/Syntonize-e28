import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  @Output() clickLink: EventEmitter<any> = new EventEmitter();

  links: any[] = [
    { path: '/home', name: 'HOME' },
    { path: '/beers', name: 'BEERS' },
    { path: '/about', name: 'ABOUT' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickLink.emit();
  }
}
