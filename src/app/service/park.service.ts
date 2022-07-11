import { PARKS_BASE_URL, API_KEY } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

const PARKS_URL = PARKS_BASE_URL + "/parks";

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(private http: HttpClient) { }

  getParkByParkCode(code: string) {
    return this.http.get(`${PARKS_URL}?parkCode=${code}&api_key=${API_KEY}`)
  }

  searchParksByQuery(query: string) {
    return this.http.get(`${PARKS_URL}?q=${query}&api_key=${API_KEY}`)
      .pipe(catchError(this.handleError));
  }

  searchParksByState(state: string) {
    return this.http.get(`${PARKS_URL}?stateCode=${state}&api_key=${API_KEY}`)
  }

  private handleError(httpError: HttpErrorResponse) {
    return throwError(() => new Error("An error occured when querying the NPS API."))
  }
}
