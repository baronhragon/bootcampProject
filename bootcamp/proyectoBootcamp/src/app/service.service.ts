import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '',
    }),
  };


  public pruebaGet(){
    try {
      return this.http.get('http://74.208.181.113:3000/api/user');

    } catch (error) {

      console.log('Error cause is:',error);
    }
  }

  public pruebaPost(data){
    try {
      return this.http.post('http://74.208.181.113:3000/api/user',data);

    } catch (error) {

      console.log('Error cause is:',error);
    }
  }

  public userPost(user){
    try {
      return this.http.post('http://74.208.181.113:3000/api/user',user);

    } catch (error) {

      console.log('Error cause is:',error);
    }
  }

  public userPostRegister(user:any): Observable<any>{
    try {
      return this.http.post('http://74.208.181.113:3000/api/user/Register',user);

    } catch (error) {

      console.log('Error cause is:',error);
    }
  }

  public userPostLogin(user) {
    try {
      return this.http.post('http://74.208.181.113:3000/api/auth/login',user);
    } catch (error) {

      console.log('Error cause is:',error);
    }
  }

  public restaurantPost(dataRestaurant){
    try {
      return this.http.post('http://74.208.181.113:3000/api/restaurants',dataRestaurant);
    } catch (error) {
      console.log('Error cause is:',error);
    }
  }

  public restaurantsGet(){
    try {
      return this.http.get('http://74.208.181.113:3000/api/restaurants');
    } catch (error) {
      console.log('Error cause is:',error);
    }
  }

  public restaurantsGetCoords(){
    try {
      return this.http.get('http://74.208.181.113:3000/api/restaurants/restaurant-coords');
    } catch (error) {
      console.log('Error cause is:',error);
    }
  }

  public getLocation(){
    try {
      return this.http.get('http://74.208.181.113:3000/api/location');
    } catch (error) {
      console.log('Error cause is:',error);
      
    }
  }

  public menuPost(dataMenu){
    try {
      return this.http.post('http://74.208.181.113:3000/api/products',dataMenu);
    } catch (error) {
      console.log('Error cause is:',error);
    }
  } 

  public postLocation(ubicacion){
    try {
      return this.http.post('http://74.208.181.113:3000/api/location',ubicacion);
    } catch (error) {
      console.log('Error cause is:',error);
      
    }
  }

  public postImages(data){
    try {
      return this.http.post('http://74.208.181.113:3000/api/upload',data);
    } catch (error) {
      console.log('Error cause is:',error);
    }}

    public productList(id){
      try {
        return this.http.post('http://74.208.181.113:3000/api/restaurants/products',id);
      } catch (error) {
        console.log('Error cause is:',error);
      }
    }

    public putLocation(data){
      try {
        return this.http.put('http://74.208.181.113:3000/api/location',data);
      } catch (error) {
        console.log('Error cause is:',error);
        
      }
    }

    public contactsPost(contacts){
      try {
        return this.http.post('http://74.208.181.113:3000/api/contacts',contacts)
      } catch (error) {
        console.log('Error cause is:',error);
      }
    }

    public checkNotification(id){
      try {
        return this.http.post('http://74.208.181.113:3000/api/user/notification',id)
      } catch (error) {
        console.log('Error cause is:',error); 
      }
    }

    public changeNotification(data){
      try {
        return this.http.put('http://74.208.181.113:3000/api/user/notification',data)
      } catch (error) {
        console.log('Error cause is:',error); 
      }
    }
    

 
}
