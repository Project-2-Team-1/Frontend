import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { url } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Park } from '../models/Park';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = url + `/users`;

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  findUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  findUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${username}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.userUrl}`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  deleteUserById(id: number): Observable<any>{
    return this.http.delete<User>(`${this.userUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  getMyParks(id: number): Observable<Park[]>{
    return this.http.get<Park[]>(`${this.userUrl}/${id}/myParks`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  deleteFromMyParksById(id: number): Observable<any>{
    return this.http.delete<Park>(`${this.userUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  getMyReviews(id: number): Observable<Review[]>{
    return this.http.get<Review[]>(`${this.userUrl}/${id}/myReviews`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  deleteFromMyReviewsById(id: number): Observable<any>{
    return this.http.delete<Review>(`${this.userUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse){
    
    if (httpError.error instanceof ErrorEvent){
      console.log('An error has occured: ', httpError.error.message);
    } else {
      console.error(`
      Backend returned code ${httpError.status}
      with body: ${httpError.error}`)
    }

    return throwError(() => new Error('something went wrong'));
  }
}  
