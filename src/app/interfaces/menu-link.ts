import { SubmenuLink } from './submenu-link';

export interface MenuLink {
  name: string;
  path: string;
  active: boolean;
  submenu?: SubmenuLink[];
}
