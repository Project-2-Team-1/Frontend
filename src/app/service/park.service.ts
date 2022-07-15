import { PARKS_BASE_URL, API_KEY } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

const PARKS_URL = PARKS_BASE_URL + "/parks";

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(private http: HttpClient) { }

  getParkByParkCode(code: string): Observable<any> {
    return this.http.get(`${PARKS_URL}?parkCode=${code}&api_key=${API_KEY}`)
  }

  getParksByParkCode(codes: string[]): Observable<any> {
    if(codes.length > 0) {
      let codesString = codes.toString();
      console.log(codesString);
      return this.http.get(`${PARKS_URL}?parkCode=${codesString}&api_key=${API_KEY}`)
    } else {
      throw new Error("Must pass at least one parkCode")
    }
  }

  searchParksByQuery(query: string): Observable<any> {
    return this.http.get(`${PARKS_URL}?q=${query}&api_key=${API_KEY}`)
      .pipe(catchError(this.handleError));
  }

  searchParksByState(state: string): Observable<any> {
    return this.http.get(`${PARKS_URL}?stateCode=${state}&api_key=${API_KEY}`)
      .pipe(catchError(this.handleError));
  }

  searchParksByQueryAndState(query: string, state: string): Observable<any> {
    return this.http.get(`${PARKS_URL}?q=${query}&stateCode=${state}&api_key=${API_KEY}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    return throwError(() => new Error("An error occured when querying the NPS API."))
  }
}
