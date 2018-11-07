import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  private Authenticated = false;

  login() {
    this.Authenticated = true;
  }

}
