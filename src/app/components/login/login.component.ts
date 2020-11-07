import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserFormAdapter } from '../../models/adapters/user-form.adapter'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private adapter: UserFormAdapter, private router: Router) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
    })
  }

  public onSubmit() {
    if(this.authService.signIn(this.adapter.adapt(this.loginForm.value))){
      this.router.navigateByUrl('/publications')
    }
    else{
      alert("Usuario o contraseña incorrecta");
    }
  }
}
