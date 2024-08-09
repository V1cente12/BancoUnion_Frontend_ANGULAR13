//src\app\app.component.ts
import { Component } from '@angular/core';
import { WebsocketService } from '../../servicios/websocket/websocket.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './pespera.component.html',
  styleUrls: ['./pespera.component.css'],
  providers: [WebsocketService],
})
export class PesperaComponent {
  title = 'socketrv';
  content = '';
  received = [];
  sent = [];

  constructor(
    private socket: WebsocketService,
    private api: ApiService,
    private router: Router
  ) {
    if (api.getUserTokken()) {
      let stompClient = this.socket.connect();
      stompClient.connect({"X-Authorization":"Bearer "+api.getUserTokken()}, (frame: any) => {
        //stompClient.subscribe('/topic/'+api.getUserAgency()+'/'+api.getUserChannel(), (notifications: any) => {
        stompClient.subscribe(`/user/${api.getUsername()}/msg/${api.getUserAgency()}/${api.getUserChannel()}`, (notifications: any) => {
          this.showGreeting(JSON.stringify(notifications.body))
          //this.showGreeting(notifications);
        });
      });
    }
  }
  showGreeting(message: any) {
    if (message === 'null') {
      this.socket._disconnect();
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
   this.router.navigate(['/dashboard']);
  }

  //verifica si no hay token
  ngOnInit(): void {
    if(this.api.verifyLogged()){
      this.router.navigate(['login']);
    }

  }

}
