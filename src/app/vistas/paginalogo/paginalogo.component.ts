import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/servicios/websocket/websocket.service';

@Component({
  selector: 'app-paginalogo',
  templateUrl: './paginalogo.component.html',
  styleUrls: ['./paginalogo.component.css']
})
export class PaginalogoComponent implements OnInit {

  constructor(
    private router: Router,
    private socket: WebsocketService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/pespera']);
  }, 5000);
  }

}
