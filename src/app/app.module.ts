import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvalpageComponent } from './evalpage/evalpage.component';
import { AppRoutingModule } from './app-routing.module';
import { PairwisepageComponent } from './pairwisepage/pairwisepage.component';

@NgModule({
  declarations: [
    AppComponent,
    EvalpageComponent,
    PairwisepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
