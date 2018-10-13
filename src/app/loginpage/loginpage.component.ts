import { Component, OnInit } from '@angular/core';
import {AfService} from '../providers/af.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  returnUrl: string;
  constructor(public af: AfService, private router: Router, private route: ActivatedRoute ) {
    this.af.logout();
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.queryParams['returnUrl']);
    if (this.route.snapshot.queryParams['returnUrl'] === undefined) {
      this.returnUrl = '/';
    } else {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }
  }
  login() {
      console.log(this.returnUrl);
      this.af.loginWithGoogle();
      this.af.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.redirect(this.returnUrl);
        } else {
          console.log('notsigned in');
        }
      });
  }
  redirect(url: string) {
    console.log('redirect called with param ' + url);
    this.router.navigateByUrl(url);
    /*this.router.navigate(['/redirect'], {
      queryParams: {
        returnUrl: url
      }
    });
    */
  }
}
