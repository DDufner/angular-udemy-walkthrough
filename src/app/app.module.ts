import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
import {ServersComponent} from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ //declares what components are part of this module.  
    //also needs to be imported.  see above.  
    AppComponent,
    ServerComponent,
    ServersComponent,
    ContactFormComponent
  ],
  imports: [ //allows you to add other modules
    BrowserModule,
    FormsModule,
    //HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
