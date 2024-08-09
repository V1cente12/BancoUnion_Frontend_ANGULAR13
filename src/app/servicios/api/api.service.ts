import { Injectable } from '@angular/core';
import{ LoginI } from '../../modelos/login.interface';
import{HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable, observable} from'rxjs';
import { Content } from 'src/app/modelos/content.interface';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  get() {
    throw new Error('Method not implemented.');
  }
  //url:string = "http://178.62.200.136:4701/api/users/v1/login";
  url: string = environment.URL_API+"api/users/v1/login"
  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    private router: Router) { 
      this.http = new HttpClient(this.handler);
    }

  loginbyEmail(form:LoginI):Observable<Content>{
    return this.http.post<Content>(this.url,form);
  }
   isLoginUser(): boolean {
    return !!localStorage.getItem('token');
  }
  getUserTokken() {
    return localStorage.getItem('token');
  }
  getUserAgency(){
    return localStorage.getItem('agencia');
  }
  getUserChannel(){
    return localStorage.getItem('canal');
  }
  getUsername(){
    return localStorage.getItem('username')
  }
  close(){
    localStorage.clear();
  }

  //cerrar sesion

  public logout():void
  {
    localStorage.removeItem('token');
    localStorage.removeItem('agencia');
    localStorage.removeItem('canal');
    this.router.navigate(['login']);
  }

  //verifica si no hay token
  public verifyLogged():boolean{
    const token=localStorage.getItem('token');
    return token ? false :true;
  }
  

  //consumir api get domains
  public getdomains(url:string){
    return this.http.get(url);

  }
  
}
