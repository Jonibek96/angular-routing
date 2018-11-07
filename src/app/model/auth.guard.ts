import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {LoginComponent} from '../auth/login/login.component';

@Injectable()
export class AuthGuard  {
  private firstNavigation = true;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != LoginComponent) {
        this.router.navigateByUrl("/login");
        return false;
      }
    }
    return true;
  }
}

