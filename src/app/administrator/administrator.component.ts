import { Component,OnInit,NgZone, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';
import {SaladService} from 'src/app/services/SaladService.service';
import{OrdersComponent} from 'src/app/orders/orders.component';
import{RestApiService}from '../services/restapi.service';

import {Salad} from 'src/app/Models/Salad';
import { isNull } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private router: Router,private service: SaladService,private restservice:RestApiService, private ngZone: NgZone) {
   
  }
   
  
    Salad: any = []; //lista pou mou fernei ta apotelesmata apo ti vasi dedomenwn
     h=sessionStorage.getItem('loggedUser');
     g:boolean=false;
     s:boolean=false;
     k:boolean=false;
     t:boolean=false;
    
    Message:any;
  User:any;



    ngOnInit() {
      if( this.h==='pasxgeorge'){
        this.router.navigate(['administrator']) }
        
        else{
          this.router.navigate(['login'])
        }
      console.log( this.h)
    
    }
  
  
    getSalad(){
  let resp=this.service.getSalad();
  resp.subscribe(data=>this.Salad=data);
  this.s=!this.s;
    }
   
    findByNameSalad(){
      let resp=this.service.findByNameSalad(this.Salad.name);
      resp.subscribe(data=>this.Salad=data);
      this.k=!this.k;
        }

        getUsers(){
          
          let resp=this.restservice.getUsers();
      resp.subscribe(data=>this.User=data);
      this.g=!this.g;
      
        }
       
      
         
      logout(){
      this.h=null
      delete this.h
        localStorage.clear()
        sessionStorage.setItem('loggedUser', this.h);
       
        this.router.navigate(['login']);
      }  

      getMessage(){
        let resp=this.restservice.getMessage();
        resp.subscribe(data=>this.Message=data);
        this.t=!this.t;
          }


}