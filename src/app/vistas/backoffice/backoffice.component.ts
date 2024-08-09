import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
  
})
export class BackofficeComponent implements OnInit {

  constructor( private apiService: ApiService

  ) { }

  ngOnInit(): void {
  }
  onLogout ():void{
    this.apiService.logout();
  }

}
