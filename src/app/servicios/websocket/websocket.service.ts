import { Injectable } from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private url = environment.URL_API;
    clienteStomp: any;
    public connect(){
        let socket = new SockJS(this.url + 'test');
        this.clienteStomp = Stomp.over(socket);
        return this.clienteStomp;
    }
    _disconnect() {
        if (this.clienteStomp !== null) {
          console.log("No es nulo");
          this.clienteStomp.disconnect();
        }
        console.log("Ya desconectado");
      }
      /*_send(message:any, cliente:any) {
          this.clienteStomp.send('/test/qr', {}, JSON.stringify({ 'name': cliente, 'data': message }));
      }*/
    
      onMessageReceived(message: any) {
        console.log("Message Recieved from Server :: " + message);
      }
}
