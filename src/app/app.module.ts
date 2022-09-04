import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
