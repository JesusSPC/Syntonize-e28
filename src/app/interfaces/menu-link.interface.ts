import { SubmenuLink } from './submenu-link.interface';

export interface MenuLink {
  name: string;
  path: string;
  active: boolean;
  submenu?: SubmenuLink[];
}
