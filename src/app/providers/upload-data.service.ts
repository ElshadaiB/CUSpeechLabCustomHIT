import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {IntellEval} from './intell-eval';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UploadDataService {
  data;
  constructor(public afs: AngularFirestore) {
  }
  async addEval(evaluation) {
    console.log('In addEval');
    console.log(evaluation);
    const user_obv = this.afs.doc<User>('users/' + evaluation.workerID).valueChanges();
    const promise = new Promise(resolve => {
      user_obv.subscribe(value => {
        console.log(value);
        const data: User = {
          uid: value.uid,
          email: value.email,
          batches: value.batches,
          roles: value.roles
        };
        resolve(data);
      });
    });
    const user = await promise;
    console.log('the user');
    console.log(user);
    const evalID = evaluation.HIT_ID + evaluation.workerID;
    const evalRef: AngularFirestoreDocument<any> = this.afs.doc('intellEvals/' + evalID);
    const ievaluation = {
      HIT_ID: evaluation.HIT_ID,
      batchID: evaluation.batchID,
      title: evaluation.title,
      workerID: evaluation.workerID,
      workerEmail: evaluation.workerEmail,
      transcriptions: JSON.stringify(evaluation.transcriptions)
    }
    if (user) {
      user.batches.push(ievaluation.batchID);
      const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/' + ievaluation.workerID);
      userRef.set(user, {merge: true});
      evalRef.set(ievaluation, {merge: true});
    }
  }
  async addPairEval(evaluation) {
    console.log('In addEval');
    console.log(evaluation);
    const evalID = evaluation.HIT_ID + evaluation.workerID;
    const evalRef: AngularFirestoreDocument<any> = this.afs.doc('pairEvals/' + evalID);
    const ievaluation = {
      HIT_ID: evaluation.HIT_ID,
      title: evaluation.title,
      workerID: evaluation.workerID,
      workerEmail: evaluation.workerEmail,
      pairEvals: JSON.stringify(evaluation.pairEvals)
    }
    console.log(ievaluation);
    evalRef.set(ievaluation, {merge: true});
  }
}


