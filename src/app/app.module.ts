import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routing } from './app.routes'; "./app_routes";
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import {ReactiveFormsModule,FormsModule} from  '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PaginalogoComponent } from './vistas/paginalogo/paginalogo.component';
import { PesperaComponent } from './vistas/pespera/pespera.component';
import { TokenInterceptor } from './token.interceptor';
import { BackofficeComponent, DomainsComponent, UsersComponent } from './vistas/index.paginas';
import { DifusionComponent } from './vistas/difusion/difusion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    PaginalogoComponent,
    PesperaComponent,
    BackofficeComponent,
    DomainsComponent,
    UsersComponent,
    DifusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    app_routing,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
