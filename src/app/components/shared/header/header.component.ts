import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private auth$: Observable<boolean>
  private _auth: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this._auth = localStorage.getItem('auth') === 'true' ? true : false;
   }

  ngOnInit(): void {
    this.auth$ = this.authService.getAuth$();    
    this.auth$.subscribe( (flagAuth: boolean) => {
      this._auth = flagAuth;
      console.log('TEST[HeaderComponent]: ' + this._auth);
    });
  }

  
  public get auth() : boolean {
    return this._auth
  }
  
  public login(){
    this.router.navigateByUrl('signin');
  }

  public logout() {
    this.authService.logout(false);
  }
}
