import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { QoutesComponent } from './qoutes/qoutes.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { UpvotesComponent } from './upvotes/upvotes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
    QoutesComponent,
        AboutComponent,
        ContactComponent,
        FooterComponent,
        UpvotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
