import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ServersComponent} from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule} from '@angular/common/http';
import { Ass2usernameComponent } from './ass2username/ass2username.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [ //declares what components are part of this module.  
    //also needs to be imported.  see above.  
    AppComponent,
    ServerComponent,
    ServersComponent,
    NewsComponent,
    ContactFormComponent,
    Ass2usernameComponent
  ],
  entryComponents: [],
  imports: [ //allows you to add other modules
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
