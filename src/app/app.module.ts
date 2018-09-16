import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvalpageComponent } from './evalpage/evalpage.component';
import { AppRoutingModule } from './app-routing.module';
import { PairwisepageComponent } from './pairwisepage/pairwisepage.component';

import { AngularFireModule  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {AfService} from './providers/af.service';
import {AuthGuard} from './providers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EvalpageComponent,
    PairwisepageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AfService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
