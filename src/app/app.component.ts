import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  menuOpen: boolean;

  links: any[] = [
    { path: '/home', name: 'HOME' },
    { path: '/beers', name: 'BEERS' },
    { path: '/about', name: 'ABOUT' }
  ];

  ngOnInit() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
