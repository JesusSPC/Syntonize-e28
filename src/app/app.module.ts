import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Pages } from './pages/index';
import { Components } from './components/index';
import { Directives } from './directives/index';

@NgModule({
  declarations: [
    AppComponent,
    ...Pages,
    ...Components,
    ...Directives,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
