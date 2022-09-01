import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders,HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn:'root',
})
export class ApiService {
    constructor(private http:HttpClient){}

    httpOptions?: {
      headers?: HttpHeaders | {[header: string]: string | string[]},
      observe?: 'body' | 'events' | 'response',
      params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
      reportProgress?: boolean,
      responseType?: 'arraybuffer'|'blob'|'json'|'text',
      withCredentials?: boolean,
    }

  public postImages(data:any){
    try {
      return this.http.post('http://74.208.181.113:3000/api/upload',data);
    } catch (error) {
      console.log('Error cause is:',error);
    }}

    public restaurantPost(dataRestaurant:any){
      try {
        return this.http.post('http://74.208.181.113:3000/api/restaurants',dataRestaurant);
      } catch (error) {
        console.log('Error cause is:',error);
      }
    }


  public userPostRegister(user:any){
    try {
      return this.http.post('http://74.208.181.113:3000/api/user/Register',user);

    } catch (error) {

      console.log('Error cause is:',error);
    }
  }
}