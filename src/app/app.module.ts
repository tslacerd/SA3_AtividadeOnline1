import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { Pag002Component } from './views/pag002/pag002.component';
import { Pag003Component } from './views/pag003/pag003.component';
import { Pag004Component } from './views/pag004/pag004.component';
import { Pag005Component } from './views/pag005/pag005.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pag002Component,
    Pag003Component,
    Pag004Component,
    Pag005Component,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
