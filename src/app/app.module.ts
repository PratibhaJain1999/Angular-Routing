import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonListComponent } from './amazon-list/amazon-list.component';
import { AmazonDetailsComponent } from './amazon-details/amazon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonListComponent,
    AmazonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
