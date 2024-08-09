import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-formulariofiltrar',
  templateUrl: './formulariofiltrar.component.html',
  styleUrls: ['./formulariofiltrar.component.css']
})
export class FormulariofiltrarComponent implements OnInit {

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }
  onLogout ():void{
    this.apiService.logout();
  }
}
