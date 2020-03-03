import { Component } from '@angular/core';
//import { FormsModule, NgModel }   from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [`
  h3{
    color:darkgreen'
  }
  `]
})
export class AppComponent {
  name = 'Udemy Walkthrough';
}
