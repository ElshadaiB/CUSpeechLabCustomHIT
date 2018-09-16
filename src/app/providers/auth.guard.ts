import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {AfService} from './af.service';
import {tap, take, map, catchError, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authState: any = null;
  constructor(private af: AfService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate');
    return this.af.afAuth.authState.pipe(
      take(1),
      map (auth => !!auth),
      tap (authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
        }
      })
    );
  }
}

