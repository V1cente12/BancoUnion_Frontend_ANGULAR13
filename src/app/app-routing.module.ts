import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { FormulariofiltrarComponent } from './vistas/formulariofiltrar/formulariofiltrar.component';
import { PaginalogoComponent } from './vistas/index.paginas';
import{ LoginComponent }from './vistas/login/login.component';
import {DifusionComponent}from "./vistas/difusion/difusion.component";
import {BackofficeComponent}from "./vistas/backoffice/backoffice.component";
import {DomainsComponent}from "./vistas/domains/domains.component";
import {UsersComponent}from "./vistas/users/users.component";
import {PesperaComponent}from "./vistas/pespera/pespera.component";



const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'formulariofiltrar',component:FormulariofiltrarComponent},
  {path:'paginalogo',component:PaginalogoComponent},
  {path:'difusion',component:DifusionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,DashboardComponent,FormulariofiltrarComponent,DifusionComponent,PesperaComponent,UsersComponent,DomainsComponent,BackofficeComponent,PaginalogoComponent]
