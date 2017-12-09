import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

    canActivate(){
        console.log('if logged in');
        return true;
    }

    canActivateChild(){
        console.log('if child logged in');
        return true;
    }

}