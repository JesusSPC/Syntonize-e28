import { Component, OnInit, Input, Output, EventEmitter, HostBinding, AfterViewInit, ViewChild, ContentChildren, AfterContentInit, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent implements AfterContentInit {
  @Input() link: any;
  @ViewChild('submenu') submenu: any;
  // @ContentChildren('submenuItem') sublinks: QueryList<any>;


  constructor(
    private renderer: Renderer2
  ) {}

  ngAfterContentInit() {
    // this.sublinks.toArray().forEach(sublink =>
    //   this.renderer.setStyle(sublink.nativeElement, 'transform', `translateY(${-100 * this.sublinks.length}%)`));
  }

  // toggleSubmenuTranslateY() {
  //   const action = this.link.active ? 'addClass' : 'removeClass';
  //   console.log(this.sublinks)
  //   this.sublinks.toArray().forEach(sublink => this.renderer[action](sublink.nativeElement, 'sub-list-open'));
  // }
}
