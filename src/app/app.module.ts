import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Pages } from './pages/index';

import { NavbarButtonComponent } from './components/shared/navbar/navbar-button.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { CloseSidebarDirective } from './components/shared/sidebar/sidebar-close.directive';

@NgModule({
  declarations: [
    AppComponent,
    ...Pages,
    NavbarButtonComponent,
    SidebarComponent,
    CloseSidebarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
