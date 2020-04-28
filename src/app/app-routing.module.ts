import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage, BeersPage, AboutPage } from './pages';


const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'beers', component: BeersPage },
  { path: 'about', component: AboutPage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
