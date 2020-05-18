import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Pages } from './pages/index';
import { Components } from './components/index';
import { Directives } from './directives/index';

import { Services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...Pages,
    ...Components,
    ...Directives,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
