import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EvalpageComponent } from './evalpage/evalpage.component';
import { PairwisepageComponent } from './pairwisepage/pairwisepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {IntellEvalFormComponent} from './intellevalform/intell-eval-form.component';
import {AuthGuard} from './providers/auth.guard';

const routes: Routes = [
  {path: 'evalpage', component: EvalpageComponent, canActivate: [AuthGuard]},
  {path: 'pairwise', component: PairwisepageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginpageComponent},
  {path: 'intellevalform', component: IntellEvalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

