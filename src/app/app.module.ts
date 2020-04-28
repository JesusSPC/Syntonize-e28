import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Pages } from './pages/index';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarMenuComponent } from './components/shared/navbar/navbar-menu/navbar-menu.component';
import { NavbarButtonComponent } from './components/shared/navbar/navbar-button/navbar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ...Pages,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
