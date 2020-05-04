import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  menuIsOpen: boolean;
  hasSubmenu: boolean;

  links: any[] = [
    { path: '/home', name: 'HOME' },
    { path: '/beers', name: 'BEERS', submenu: [
      { name: 'LAGER', brand: 'lager' },
      { name: 'ALHAMBRA', brand: 'alhambra' },
      { name: 'INEDIT', brand: 'inedit' }
      ]
    },
    { path: '/about', name: 'ABOUT' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menuIsOpen = false;
    this.hasSubmenu = false;
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  goTo(link, subLink) {
    if (link.submenu && link.submenu[0].name) {
      if (this.hasSubmenu === true) {
        this.toggleMenu();
        console.log(subLink.brand);

        this.router.navigate([`${link.path}`], { queryParams: { brand: subLink.brand }, relativeTo: this.route});
      }
      this.hasSubmenu = !this.hasSubmenu;
    } else {
      this.toggleMenu();
      this.router.navigate([`${link.path}`], {relativeTo: this.route});
    }
  }
}
