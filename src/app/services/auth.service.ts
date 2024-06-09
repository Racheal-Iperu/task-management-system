import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {BehaviorSubject, map, Observable, throwError} from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);

  private apiUrl = 'http://localhost:3000'; // JSON Server URL
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<string> {
    // Send a GET request to retrieve the user with the provided username and password
    return this.http.get<any>(`${this.apiUrl}/users?username=${username}&password=${password}`).pipe(
      map(users => {
        // Check if any user is found with the provided username and password
        if (users.length === 1) {
          // Store user details and JWT token in local storage
          const token = "usersddsfds.eweedesdssds.fdddf" // using a dummy token to simulate token received from the backend
          localStorage.setItem('token', "usersddsfds.eweedesdssds.fdddf");
          // Return the generated token
          return token;
        } else {
          // If no user found, throw an error
          throw new Error('Invalid username or password');
        }
      }),
      catchError(error => {
        // Handle HTTP errors
        return throwError(error);
      })
    );
  }

}
