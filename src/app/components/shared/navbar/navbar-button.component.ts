import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent implements AfterViewInit {

  // @ViewChild('menu') menu: any;
  @Output() clickBurger: EventEmitter<any> = new EventEmitter();

  constructor(
    private eRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    this.hideMenu();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    const mobileWidth = 480;
    if (window.innerWidth < mobileWidth) {
      if (!this.eRef.nativeElement.contains(event.target)) {
        this.hideMenu();
      }
    }
  }

  hideMenu() {
    // this.menu.nativeElement.classList.add('hidden');
  }

  toggleMenu() {
    // this.menu.nativeElement.classList.toggle('hidden');
  }

  clickMenu() {
    this.clickBurger.emit();
  }
}
