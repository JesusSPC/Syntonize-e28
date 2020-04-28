import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent implements OnInit {
  @Output() clickBurger: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickMenu() {
    this.clickBurger.emit();
  }
}
