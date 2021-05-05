
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams,HttpHeaders} from '@angular/common/http';








@Injectable({

  providedIn: 'root'
})





export class RestApiService {


constructor(private http:HttpClient) { 



}


  
  // login(username:string,password:number){
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password ) });
  //   return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
  // }
  public doRegistration(User){
    return this.http.post('http://localhost:9090/register', User, { responseType: 'text' as 'json'});
  }
  public login(username, password,role){


    return this.http.get( 'http://localhost:9090/User/' + username + '/' + password + '/' +role  );
    
  }

  public getUsers(){


    return this.http.get( 'http://localhost:9090/allusers/'  );
    
  }
  public sendMessage(messageText){
    return this.http.get('http://localhost:9090/sendMessage/'+ messageText,{ responseType: 'text' as 'json'});
  }
  public getMessage(){
    return this.http.get('http://localhost:9090/getMessage/');
  }
}

