import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ass2username',
  templateUrl: './ass2username.component.html',
  styleUrls: ['./ass2username.component.css']
})
export class Ass2usernameComponent implements OnInit {
  userName= "";
  userNameB="";
  clearUserName = true;
  userNameFieldBlank= true;

  constructor() { }

  ngOnInit() {
  }
  onUserNameUpdate (event: Event){
    this.userName=(<HTMLInputElement>event.target).value;
    //this.userName.onResetUserName();
  }

  onResetUserName(){
    this.userName ="";
  }

  
}
