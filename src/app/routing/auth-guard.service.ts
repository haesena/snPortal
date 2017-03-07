/**
 * Created by haesen on 20.02.2017.
 */

import {Injectable} from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import {Configuration} from '../configuration';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private config: Configuration, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }
}

