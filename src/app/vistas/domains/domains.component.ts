import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cargarDataDomains();
  }

  public cargarDataDomains(): void {
    // Simulación de respuesta de prueba
    const respuesta = { mensaje: 'Prueba de datos de dominios' };
    console.log(respuesta);
    
    // O si prefieres, puedes imprimir un mensaje indicando que es una función de prueba
    // console.log('cargarDataDomains() fue ejecutado como una prueba.');
  }

  onLogout(): void {
    this.apiService.logout();
  }
}
