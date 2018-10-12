import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {User} from './user';
import {AfService} from './af.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchGuard implements CanActivate {
  constructor(private af: AfService, private route: ActivatedRoute, private afs: AngularFirestore,
              private httpClient: HttpClient, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('in batch guard');
    let urlParams = new URLSearchParams(window.location.search);
    let batchUrl = urlParams.get('batch');
    if (batchUrl === null) {
      urlParams = new URLSearchParams(urlParams.get('returnUrl').split('?')[1]);
      batchUrl = urlParams.get('batch');
    }
    console.log(batchUrl);
    let batchID = '';
    //
    return new Promise(resolve => {
      this.af.afAuth.authState.subscribe(value => {
        console.log(value);
        const user_obv = this.afs.doc<User>('users/' + value.uid).valueChanges();
        let batches;
        user_obv.subscribe(user => {
          console.log(user);
          batches = user.batches;
          console.log(batches);
          this.httpClient.get('assets/' + batchUrl).subscribe(result => {
            batchID = result['batchID'];
            console.log(batchID);
            const activate: boolean = !(batches.includes(batchID.toString().trim()));
            if (activate) {
              console.log('ACTIVATE');
            } else {
              this.router.navigate(['/noaccess']);
            }
            resolve(activate);
          });
      });
      //
    });
  });
}
}
