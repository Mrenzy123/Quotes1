import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QquoteComponent } from './qquote/qquote.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    QquoteComponent,
    QuotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
