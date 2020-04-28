import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHidden: boolean;
  constructor() { }

  ngOnInit(): void {
    this.hideMenu();
  }

  hideMenu() {
    this.isHidden = true;
  }

  toggleMenu() {
    this.isHidden = !this.isHidden;
  }
}
