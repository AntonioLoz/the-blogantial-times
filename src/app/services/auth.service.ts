import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth$: Subject<boolean> = new Subject<boolean>();
  private auth: boolean;
  private users: Array<User>

  constructor() {
    this.users = new Array<User>();
    this.users.push(new User('pepito', '1234'), new User('user', 'user'));
    this.auth = localStorage.getItem('auth') === 'true' ? true : false;
   }

   public signIn(user: User): boolean {

     for(let storedUser of this.users){
       if(user.userName === storedUser.userName && user.password === storedUser.password){
         this.auth = true;
         this.auth$.next(this.auth);
         localStorage.setItem('auth', 'true');
         break;
       }
       else{
         this.auth = false;
       }
     }

     return this.auth;
   }

   public logout(flag: boolean): void {
     localStorage.setItem('auth', 'false');
     this.auth = flag
     this.auth$.next(this.auth);
   }

   public getAuth$(): Observable<boolean> {
     this.auth = (localStorage.getItem('auth') === 'true') ? true : false;
     return this.auth$.asObservable();
   }

   public isAuthForGuard(): boolean {
    return this.auth;
  }
}
