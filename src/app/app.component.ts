import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as data from 'src/data/menu-links.json';
import { MenuLink } from './interfaces/menu-link';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {

  menuIsOpen: boolean;

  submenu: any;
  menus: MenuLink[] = (data  as  any).default;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  toggleSidebar() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menus.forEach(l => l.active = false);
  }

  toggleMenu(index: number) {
    // if (this.menus[index].submenu.length < 0) {

    // }
    this.menus.filter((menu, i) =>
      i !== index && menu.active
    ).forEach(menu => menu.active = !menu.active);

    this.menus[index].active = !this.menus[index].active;
  }

  // goToLink(link, idx?) {
  //   if (!link.submenu || link.submenu.length < 1) {
  //     this.toggleMenu();
  //     this.router.navigate([`${link.path}`], {relativeTo: this.route});
  //   }
  //   if (link.submenu && link.submenu.length > 0) {
  //       this.toggleSubmenu(idx);
  //   }
  // }

  goToSubLink(link, sublink, idx?) {
    this.router.navigate([`${link.path}`], { queryParams: { brand: sublink.brand }, relativeTo: this.route});
  }
}
