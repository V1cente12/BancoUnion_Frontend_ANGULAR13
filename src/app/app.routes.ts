import { Component } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import {
    BackofficeComponent,
    DashboardComponent,
    DomainsComponent,
    FormulariofiltrarComponent,
    LoginComponent,
    PaginalogoComponent,
    PesperaComponent,
    UsersComponent,
    DifusionComponent,
} from"./vistas/index.paginas";

const app_routes : Routes=[
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'formulariofiltrar', component: FormulariofiltrarComponent},
    {path: 'paginalogo', component: PaginalogoComponent},
    {path: 'pespera', component: PesperaComponent},
    {path: 'backoffice', component: BackofficeComponent},
    {path:'domains', component: DomainsComponent},
    {path:'users', component: UsersComponent},
    {path:'difusion', component: DifusionComponent},
] 
export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
