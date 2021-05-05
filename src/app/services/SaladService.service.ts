import {Injectable} from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';








@Injectable({

  providedIn: 'root'
})





export class SaladService {

    constructor(private http: HttpClient) {
    } 

public getSalad(){
    return this.http.get('http://localhost:9090/allsalads');}


public findByNameSalad(name){
  return this.http.get('http://localhost:9090/findByName/'+name);}



}