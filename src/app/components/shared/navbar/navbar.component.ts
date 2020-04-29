import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('menu') menu: any;

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
    this.menu.nativeElement.classList.add('hidden');
  }

  toggleMenu() {
    this.menu.nativeElement.classList.toggle('hidden');
  }
}
