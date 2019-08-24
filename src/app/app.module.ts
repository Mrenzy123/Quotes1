import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QquoteComponent } from './qquote/qquote.component';
import { QuotedetailsComponent } from './quotedetails/quotedetails.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteformComponent } from './quoteform/quoteform.component';



@NgModule({
  declarations: [
    AppComponent,
    QquoteComponent,
    QuotedetailsComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
