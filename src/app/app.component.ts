import { Component } from '@angular/core';
import { AfService } from './providers/af.service';
import {Router, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'external-hit';
  userEmail: string;
  constructor(public af: AfService, private router: Router) {
    this.af.afAuth.authState.subscribe(value => {
      if (value) {
        this.userEmail = value.email;
      }
    });
  }
  logout() {
    this.userEmail = '';
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: this.router.url
      }
  });
}
}
