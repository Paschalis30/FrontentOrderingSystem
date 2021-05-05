import { Component, OnInit } from '@angular/core';
import{AuthService}from '../auth.service';
import{Router}  from '@angular/router';



@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
 // 
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear
    
    this._authService.logout();
    // this._authService.isUserLoggedIn();
    this.router.navigate(['login']);
  // 
    
    

    
  }

}
