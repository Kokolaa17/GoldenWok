import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIconnectionService } from '../apiconnection.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private http : APIconnectionService, public cookies : CookieService, public RouteR : Router){

  }

  public badRequest: string = ""
  public isRegistered: any = ""
  public isLogedIn: boolean = false;

  public logInForm: FormGroup = new FormGroup({
    email: new FormControl("", [ Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  logInAccount(){
    this.http.logIn(this.logInForm.value).subscribe({
      next: (data : any) => {
        this.isLogedIn = true;
        this.cookies.set("userLogedIn", data.access_token)
         setTimeout(() => {
          this.RouteR.navigate(["/"])
        }, 1500);
        this.badRequest = ""
      },
      error: (data: any) => {
        this.badRequest = data.error.error
      }
      
    })
  }
}
