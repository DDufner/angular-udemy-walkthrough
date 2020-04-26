import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel }   from '@angular/forms';

@Component({
  selector: 'contact-form', //could also be [contact-form] so it can set as HTML attribute 
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x) {console.log(x);}

}
