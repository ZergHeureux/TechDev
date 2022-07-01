import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  itle = 'TechDev';
  TOKEN_KEY = 'auth-token';
  USER_KEY = 'auth-user';
  currentUser: any | null = null;

// no httpClient is provided in local env. Need to be set with prod env.
  constructor(/*private api: HttpClient,*/ public router: Router){

  }


  onSubmitConnection (){
    var login_i = <HTMLInputElement>document.getElementById("login_input");
    var password_i = <HTMLInputElement>document.getElementById("pwd_input");   
    this.login({email:login_i.value,password:password_i.value})
    //alert("connected but think about reading the code ;)")
    this.router.navigate(['/dashboard']);
  }

  //classic connection functions 

  login(credentials: { email: string, password: string })
    {
      
      //this function need HttpClient to be set.
      
        /*
        return this.api.post<any>('/', {
            username: credentials.email,
            password: credentials.password
        }).subscribe((res: any) =>
        {
            this.saveToken(res.token);
        });
        */
    }

    //Not usefull in our case but it can be later.

    /*
    register(user:any): Observable<any>
    {
        console.log('Auth service','register',user);
        return this.api.post('register',
            user
        );
    }
   */

    logout(): void
    {
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/']);
    }

    saveToken(token: string): void
    {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null
    {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    //Session management

    saveUser(user: any): void
    {
        localStorage.removeItem(this.USER_KEY);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }

    getUser(): any | null
    {
        const lsUser = localStorage.getItem(this.USER_KEY);
        if (!lsUser) return null;
        this.currentUser = JSON.parse(lsUser)
        console.log(this.currentUser);
        return this.currentUser;
    }

    // GETTERS

    get isLoggedIn(): boolean
    {
        let authToken = localStorage.getItem(this.TOKEN_KEY);
        return authToken !== null;
    }

    get isLoggedOut(): boolean
    {
        return !this.isLoggedIn
    }

    // Error
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(()=> new Error(msg));
    }
  
}



