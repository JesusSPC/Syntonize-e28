import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage, BeersPage, AboutPage } from './pages';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '/home', component: HomePage },
  { path: '/beers', component: BeersPage },
  { path: '/about', component: AboutPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
