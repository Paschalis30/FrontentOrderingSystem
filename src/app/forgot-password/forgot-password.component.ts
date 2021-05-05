import { Component, OnInit } from '@angular/core';
import {ForgotPasswordService}from '../services/forgot-password.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
message:string
  constructor(private service: ForgotPasswordService) { }
  User:any=[];
  ngOnInit(): void {
  }
  
findByUsername(){
  let resp=this.service.findByUsername(this.User.username);
  resp.subscribe(data=>this.User=data);
  
  if(!this.User.password){
    this.message='invalid username'
    
    
  }
else if(!this.User.password && this.message==='invalid username'){
    
     this.message=null
    delete this.message
    console.log("Geia"+this.message)
    
   
  
}
}


}
