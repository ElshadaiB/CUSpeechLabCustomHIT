import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EvalpageComponent } from './evalpage/evalpage.component';
import { PairwisepageComponent } from './pairwisepage/pairwisepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {IntellEvalFormComponent} from './intellevalform/intell-eval-form.component';
import {AuthGuard} from './providers/auth.guard';
import {BatchGuard} from './providers/batch.guard';
import {ThankYouComponent} from './thank-you/thank-you.component';
import {NoAccessComponent} from './no-access/no-access.component';

const routes: Routes = [
  {path: 'evalpage', component: EvalpageComponent, canActivate: [AuthGuard, BatchGuard]},
  {path: 'pairwise', component: PairwisepageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginpageComponent},
  {path: 'intellevalform', component: IntellEvalFormComponent},
  {path: 'thankyou', component: ThankYouComponent},
  {path: 'noaccess', component: NoAccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

