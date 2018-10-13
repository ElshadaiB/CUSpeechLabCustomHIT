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
import {RedirectComponent} from './redirect/redirect.component';

const routes: Routes = [
  {path: 'evalpage', component: EvalpageComponent, canActivate: [AuthGuard, BatchGuard]},
  {path: 'pairwise', component: PairwisepageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginpageComponent},
  {path: 'intellevalform', component: IntellEvalFormComponent},
  {path: 'thankyou', component: ThankYouComponent},
  {path: 'noaccess', component: NoAccessComponent},
  {path: 'redirect', component: RedirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

