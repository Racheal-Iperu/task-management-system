import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  apiUrl = " http://localhost:3000/tasks"

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(error); // Rethrow the error
      })
    );
  }

  createTask(task:any){
    return this.http.post(this.apiUrl,task).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(error); // Rethrow the error
      })
    );
  }

 updateTask(task:any,taskId){
    return this.http.put(`${this.apiUrl}/${taskId}`,task).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(error); // Rethrow the error
      })
    );
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${taskId}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(error); // Rethrow the error
      })
    );;
  }

  // Get a single task by ID
  getTaskById(taskId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${taskId}`).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError(error); // Rethrow the error
      })
    );;
  }

}
