import { Component } from '@angular/core';
import{RestApiService} from '../services/restapi.service';
import{User} from '../Models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  message: any;

constructor(private service: RestApiService) {
}
User:User=new User('',null,'user','')

  public  registerNow(){

  const resp = this.service.doRegistration(this.User);

  return resp.subscribe((data) => this.message = data);
  }
 }