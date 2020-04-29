import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent {

  @Output() clickBurger: EventEmitter<any> = new EventEmitter();

  clickMenu() {
    this.clickBurger.emit();
  }
}
