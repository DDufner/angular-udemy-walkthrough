import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: ``,
  styleUrls: ['./servers.component.css'],
  //styles: [h1. {color: darkgreen}]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ="No Server Created.";
  serverName='';
  serverID='';
  serverExpirationDate='';
  serverCreated = false;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer =true;
    },3000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    //this.serverCreationStatus = "Server was created. Server name: " + this.serverName + 
    //" || Server ID: " + this.serverID +
    //" || Server Expiration Date: " + this.serverExpirationDate;
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  onUpdateServerID(event: Event){
    this.serverID=(<HTMLInputElement>event.target).value;
  }
  onUpdateServerExpirationDate(event:Event){
    this.serverExpirationDate=(<HTMLInputElement>event.target).value;
  }
}
