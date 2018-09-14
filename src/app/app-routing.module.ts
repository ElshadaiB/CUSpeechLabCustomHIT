import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EvalpageComponent } from './evalpage/evalpage.component';
import { PairwisepageComponent } from './pairwisepage/pairwisepage.component';

const routes: Routes = [
  {path: 'evalpage', component: EvalpageComponent},
  {path: 'pairwise', component: PairwisepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

