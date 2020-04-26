import {Component} from '@angular/core';

@Component({
    selector: 'app-server', //used to connect to a specific html tag like 'app-root'
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverID: number=10;
    serverStatus: string= 'Server Offline'

    getServerStatus(){
        return this.serverStatus
    }
}