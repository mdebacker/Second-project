import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ContactListComponent } from './contact/contact-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ContactListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }