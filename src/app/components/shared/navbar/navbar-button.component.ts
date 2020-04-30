import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent {

  @Output() clickBurger = new EventEmitter<any>();

}
