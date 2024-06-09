import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = " http://localhost:3000/users"
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(error); // Rethrow the error
      })
    );
  }
}
