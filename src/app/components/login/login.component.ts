import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string = '';
  password: string = '';

  loginErrMsg: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  // pass thru the username & string from the tempalte, and
  // call the auth service
  login() {

    // first check for empty values
    if(!this.username.trim() || !this.password.trim()) {
      this.loginErrMsg = 'Failed Login';
      return;
    }

    // call the authService to hit the /login enpoint
    this.isLoading = true;
    this.authService.login(this.username, this.password)
      .subscribe(
        // if we're successfull, this is the callback that's invoked
        (response) => {
          this.isLoading = false;

          // build a token that we capture from the response's headers (from Spring)
          const token = response.headers.get('adventure-token')

          // useing the browser's session to store session info
          sessionStorage.setItem('token', token);

          // here I'm setting the username property of the user object
          // that we recieved back in the body of the response.
          this.router.navigate(['/dashboard'])
        },
        () => {
          this.isLoading = false;
          this.loginErrMsg = 'Login Failed';
        }
      );

      // clear the input fields
      this.username = '';
      this.password = '';
    }
}
