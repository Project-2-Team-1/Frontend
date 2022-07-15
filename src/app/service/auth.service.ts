import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {url} from 'src/environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // this will be sent as the header of the POST request
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  loginUrl = url + '/login'; // http://localhost:5000/api/login

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {

    // this represents the body of the response
    const payload = {username, password} // (claims)

    // return the this.http.post method
    return this.http.post<any>(this.loginUrl, payload, { observe: 'response' })
    // replace this.httpOptions with { observe: 'response' }
    // alternatively add .pipe() to return any errors

    // create a custom error method
  }

  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = sessionStorage.getItem('token');

    if(!token)
      return false;

    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(["/"]);
  }

  currentUserId(){
    let token = sessionStorage.getItem('token');
    if (!token) return null;

    let jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token).id;
  }

  currentUserId(): number {
    let token = sessionStorage.getItem("token");
    if(!token) return 0;
    let jwtHelper = new JwtHelperService();
    console.log(jwtHelper.decodeToken(token).jti);
    return jwtHelper.decodeToken(token).jti;
  }
}
