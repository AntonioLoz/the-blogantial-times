import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }


  canActivate(): boolean {
    let flag: boolean = false;
    
    if(this.authService.isAuthForGuard()){
      flag = true;
    }
    else {
      this.router.navigateByUrl('/signin');
    }
    return flag;
  }
  
}
