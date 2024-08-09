import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import {LoginI} from '../../modelos/login.interface';
import {Router} from '@angular/router';
import{ResponseI} from '../../modelos/response.interface'
import { WebsocketService } from 'src/app/servicios/websocket/websocket.service';
import { Content } from 'src/app/modelos/content.interface';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm=new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  constructor(
    private api:ApiService,
    private router:Router) {}

  ngOnInit(): void {}



  onLogin(form:LoginI){
  this.api.loginbyEmail(form).subscribe(data =>{
   let content:Content=data;
   console.log(content);
   localStorage.clear();
   localStorage.setItem("token",content.data.token);
   localStorage.setItem("agencia",""+content.data.idAgency);
   localStorage.setItem("canal",""+content.data.idChannel);
   localStorage.setItem("username",content.data.username);
   this.router.navigate(['/pespera']);
   
  });
    
  }

}
