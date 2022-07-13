import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Review } from '../models/Review';
import { throwError, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewUrl: string = url + `/reviews`;

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  findReviewById(id: number): Observable<Review>{
    return this.http.get<Review>(`${this.reviewUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  findReviewsByParkCode(parkCode: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.reviewUrl}/park/${parkCode}`)
      .pipe(catchError(this.handleError));
  }

  uploadReview(review: any): Observable<Review> {
    return this.http.post<Review>(`${this.reviewUrl}`, review, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findAllReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewUrl, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteReviewById(id: number): Observable<any>{
    return this.http.delete<Review>(`${this.reviewUrl}/${id}`, this.httpOptions)
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
