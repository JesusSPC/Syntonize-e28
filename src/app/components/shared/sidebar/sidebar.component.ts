import { Component, OnInit, Output, EventEmitter, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isHidden: boolean;
  @Output() clickLink: EventEmitter<any> = new EventEmitter();

  links: any[] = [
    { path: '/home', name: 'HOME' },
    { path: '/beers', name: 'BEERS' },
    { path: '/about', name: 'ABOUT' }
  ];

  constructor(
    private _eRef: ElementRef
  ) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    const mobileWidth = 480;
    if (window.innerWidth < mobileWidth) {
      if (!this._eRef.nativeElement.contains(event.target)) {
        // this.onClick();
      }
    }
  }

  // @HostListener('mouseleave', ['$event'])
  // @HostListener('mousedown', ['$event'])
  // clickout(event) {
  //   console.log('FUERA')
  // }

  onClick() {
    this.clickLink.emit();
  }
}
