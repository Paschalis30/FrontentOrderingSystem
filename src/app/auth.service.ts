import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
isUserLoggedin:boolean;
  constructor() { }

  logout(){
    this.isUserLoggedin = false;
   
    
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
}
