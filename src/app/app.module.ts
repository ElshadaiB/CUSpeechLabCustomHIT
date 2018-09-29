import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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

import {HttpClientModule} from '@angular/common/http';
import { DynamicEvalPageComponent } from './dynamic-eval-page/dynamic-eval-page.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import {IntellEvalFormComponent} from './intellevalform/intell-eval-form.component';
import { DynamicPairPageComponent } from './dynamic-pair-page/dynamic-pair-page.component';
import { DynamicPairFormQuestionComponent } from './dynamic-pair-form-question/dynamic-pair-form-question.component';
import { PairEvalFormComponent } from './pair-eval-form/pair-eval-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EvalpageComponent,
    PairwisepageComponent,
    LoginpageComponent,
    DynamicEvalPageComponent,
    DynamicFormQuestionComponent,
    IntellEvalFormComponent,
    DynamicPairPageComponent,
    DynamicPairFormQuestionComponent,
    PairEvalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AfService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
