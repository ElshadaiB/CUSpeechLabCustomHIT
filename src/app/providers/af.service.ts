import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import {User } from './user';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<User>;
  authState: any = null;
  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
    this.user$  = afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<User>('users/' + user.uid).valueChanges();
      } else {
        of(null);
      }
    })
    );
  }
  loginWithGoogle(): boolean {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);
      this.isLoggedIn();
      return true;
    });
    return false;
  }
  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn();
  }
  get currentUserObservable(): any {
    return this.afAuth.auth;
  }
  updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/' + user.uid);
    const data: User = {
      uid: user.uid,
      email: user.email,
      batches: ['o', 't'],
      roles: {
        worker: true,
        admin: false
      }
    }
    return userRef.set(data, {merge: true});
  }
  isLoggedIn(): void {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      auth === null ? console.log('unsigned') : console.log('signed');
    });
  }
  getUserId() {
    return this.afAuth.auth.currentUser.uid;
  }
  getUserEmail() {
    return this.afAuth.auth.currentUser.email;
  }
}

