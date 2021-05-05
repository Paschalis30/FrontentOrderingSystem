import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }



  public findByUsername(username){
    return this.http.get('http://localhost:9090/findByUsername/'+username);}


}
