import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { appRouting } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserService } from './shared/services/user.service';
import { AboutUsersResolve } from './about/about-resolve.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    appRouting
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  providers: [
    UserService,
    AboutUsersResolve
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}