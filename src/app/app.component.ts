import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as data from 'src/data/menu-links.json';
import { MenuLink } from './interfaces/menu-link';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  menuIsOpen: boolean;

  submenu: any;
  links: MenuLink[] = (data  as  any).default;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.links.forEach(l => l.active = false);
  }

  toggleSubmenu(idx) {
    this.links[idx].active = !this.links[idx].active;
    this.submenu = this.links[idx];
    console.log(`Active for ${this.links[idx].name} is ${this.links[idx].active}`);
  }

  goToLink(link, idx?) {
    if (!link.submenu || link.submenu.length < 1) {
      this.toggleMenu();
      this.router.navigate([`${link.path}`], {relativeTo: this.route});
    }
    if (link.submenu && link.submenu.length > 0) {
        this.toggleSubmenu(idx);
    }
  }

  goToSubLink(link, sublink, idx?) {
    this.toggleMenu();
    this.router.navigate([`${link.path}`], { queryParams: { brand: sublink.brand }, relativeTo: this.route});
  }
}
