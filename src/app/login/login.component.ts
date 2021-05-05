import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/restapi.service';
import { Router } from '@angular/router';
import{User} from 'src/app/Models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 title2='Σύνδεση Χρήστη'

username:string;
password:number;
message:any
message2:string
role:string;



constructor(private service:RestApiService,private router:Router){}
ngOnInit(){
 
}
 login() {
 
  let resp = this.service.login(this.username,this.password,this.role);

  resp.subscribe(data=>{this.message=data;

    if(this.role==='admin'&&this.message.length!==0&&this.username==='pasxgeorge'&& this.password==1234){
       this.router.navigate(["/administrator"])
       
       
       
       
      }
       
      if(this.role==='user'&&this.message.length!==0&&this.username!=='pasxgeorge'){
        this.router.navigate(["/"])
       
      }
  })   
  
  
if(this.username!=null){
   this.message2="invalid login";
  
}
 sessionStorage.setItem('loggedUser', this.username);
  }

  
  
  

 


}