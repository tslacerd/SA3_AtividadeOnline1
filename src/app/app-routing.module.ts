import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { Pag002Component } from './views/pag002/pag002.component';
import { Pag003Component } from './views/pag003/pag003.component';
import { Pag004Component } from './views/pag004/pag004.component';
import { Pag005Component } from './views/pag005/pag005.component';

const routes: Routes = [
  {path: "", component:HomeComponent}, 
  {path:"pag002", component:Pag002Component},
  {path:"pag003", Component:Pag003Component},
  {path:"pag004", component:Pag004Component},
  {path:"pag005", Component:Pag005Component},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
