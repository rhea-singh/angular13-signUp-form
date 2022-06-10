import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


export class FormDataService {

  constructor(private http: HttpClient) {}

  baseurl = 'https://demo-api.now.sh/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  /** Send the user data from the form to be stored*/
  registerUser(formData: any){
    /** Do not store the password in DB */
    if(formData.password){
      delete formData.password;
    }
    return this.http
      .post<any>(this.baseurl, JSON.stringify(formData), this.httpOptions)
      .subscribe(data => {
        console.log('New user data :: ', data);
    });
  }
}