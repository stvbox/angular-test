import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor() { }

  canActivate(route, state): boolean {
    console.log(' --- ');
    console.log(route, state);

    return true;
  }

}
