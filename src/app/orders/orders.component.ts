
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, Output, ViewChild, ElementRef, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';
import './orders.component.js';
declare const aa:any;
declare const getWeather:any;
declare const setWeather:any;



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit,AfterViewInit{
  h=sessionStorage.getItem('loggedUser');
  
  z:boolean=true;






// @Output()out=new EventEmitter<string>();

@ViewChild('souvlaki') souvlaki:ElementRef;
@ViewChild('tzatziki') tzatziki:ElementRef;

@ViewChild('soutzoukaki') soutzoukaki:ElementRef;
@ViewChild('sandwitchMono') sandwitchMono:ElementRef;
@ViewChild('sandwitchDiplo') sandwitchDiplo:ElementRef;
@ViewChild('xoriatiki') xoriatiki:ElementRef;
@ViewChild('psomi') psomi:ElementRef;
@ViewChild('retsina') retsina:ElementRef;
@ViewChild('bira') bira:ElementRef;
@ViewChild('coca') coca:ElementRef;
@ViewChild('nero') nero:ElementRef;
@ViewChild('portokalada') portokalada:ElementRef;


souvlakis:string
tzatzikis:string

soutzoukakis:string
sandwitchDiplos:string
sandwitchMonos:string
xoriatikis:string
psomis:string
retsinas:string
biras:string
cocas:string
neros:string
portokaladas:string



souv:number;
tzatz:number;

soutz:number;
sandD:number;
sandM:number;
xor:number;
pso:number;
ret:number;
bi:number;
coc:number;
ner:number;
port:number;


f:number=0;
k:number=0;

s:number=0;
sM:number=0;
sD:number=0;
x:number=0;
p:number=0;
r:number=0;
bir:number=0;
c:number=0;
n:number=0;
por:number=0;

paragelia:Boolean=false
counterSouvlaki:number=0
counterTzatziki:number=0

counterSoutzoukaki:number=0
counterSandwitchMono:number=0
counterSandwitchDiplo:number=0
counterXoriatiki:number=0
counterPsomi:number=0
counterRetsina:number=0
counterBira:number=0
counterCoca:number=0
counterNero:number=0
counterPortokalada:number=0
sinolo:number=0;
isDisabled:boolean=false;
constructor(private router:Router) {
     
}
ngOnInit(){
//   aa();
// getWeather();
// setWeather();
if( this.h==='pasxgeorge'){
this.router.navigate(['orders']) }

else{
  this.router.navigate(['login'])
}
}

calculate(){
  
   
  //  souvlaki ipologismos
   if(this.souvlaki.nativeElement.value==null){
       this.f=0
   }
   else{
    this.f=this.souvlaki.nativeElement.value*1.3;}

//tzatziki ipologismos
    if(this.tzatziki.nativeElement.value==null){
      this.k=0
  }
  else{
   this.k=this.tzatziki.nativeElement.value*2.5;}

   

  //soutzoukaki ipologismos
  if(this.soutzoukaki.nativeElement.value==null){
    this.s=0
}
else{
 this.s=this.soutzoukaki.nativeElement.value*1.3;}

//sandwitchMono

 if(this.sandwitchMono.nativeElement.value==null){
  this.sM=0
}
else{
this.sM=this.sandwitchMono.nativeElement.value*2.5;}

//sandwitchDiplo

if(this.sandwitchDiplo.nativeElement.value==null){
  this.sD=0
}
else{
this.sD=this.sandwitchDiplo.nativeElement.value*3;}

//xoriatiki

if(this.xoriatiki.nativeElement.value==null){
  this.x=0
}
else{
this.x=this.xoriatiki.nativeElement.value*3;}


//psomi

if(this.psomi.nativeElement.value==null){
  this.p=0
}
else{
this.p=this.psomi.nativeElement.value*0.5;}



//retsina

if(this.retsina.nativeElement.value==null){
  this.r=0
}
else{
this.r=this.retsina.nativeElement.value*3;}



//bira

if(this.bira.nativeElement.value==null){
  this.bir=0
}
else{
this.bir=this.bira.nativeElement.value*2.5;}



//coca cola

if(this.coca.nativeElement.value==null){
  this.c=0
}
else{
this.c=this.coca.nativeElement.value*1.5;}



//nero

if(this.nero.nativeElement.value==null){
  this.n=0
}
else{
this.n=this.nero.nativeElement.value*0.5;}



//portokalada

if(this.portokalada.nativeElement.value==null){
  this.por=0
}
else{
this.por=this.portokalada.nativeElement.value*1.5;}



   this.sinolo=this.f+this.k+this.s+this.sM+this.sD+this.x+this.p+this.r+this.bir+this.c+this.n+this.por

   
  }
   





  ngAfterViewInit(){
    
  }
   clear(){
    
    this.tzatziki.nativeElement.value=null;
    this.souvlaki.nativeElement.value=null;
    this.soutzoukaki.nativeElement.value=null;
    this.sandwitchMono.nativeElement.value=null;
    this.sandwitchDiplo.nativeElement.value=null;
    this.xoriatiki.nativeElement.value=null;
    this.psomi.nativeElement.value=null;
    this.retsina.nativeElement.value=null;
    this.bira.nativeElement.value=null;
    this.coca.nativeElement.value=null;
    this.nero.nativeElement.value=null;
    this.portokalada.nativeElement.value=null;
    this.f=0;
    this.k=0;
    
    this.s=0;
    this.sM=0;
    this.sD=0;
    this.x=0;
    this.p=0;
    this.r=0;
    this.bir=0;
    this.c=0;
    this.n=0;
    this.por=0;
    this.sinolo=0
    this.paragelia=false;
    this.isDisabled = false;

    this.counterSouvlaki=0
this.counterTzatziki=0

this.counterSoutzoukaki=0
this.counterSandwitchMono=0
this.counterSandwitchDiplo=0
this.counterXoriatiki=0
this.counterPsomi=0
this.counterRetsina=0
this.counterBira=0
this.counterCoca=0
this.counterNero=0
this.counterPortokalada=0

this.souv=null
this.tzatz=null
this.soutz=null
this.sandD=null
this.sandM=null
this.xor=null
this.pso=null
this.ret=null
this.bi=null
this.coc=null
this.ner=null
this.port=null
   }
   finalPrice():void{


 
     if(this.sinolo==0){
       
     }
     else{
    this.paragelia=!this.paragelia;
    this.isDisabled = true;
    if(this.souvlaki.nativeElement.value==0||this.souvlaki.nativeElement.value==null){
      this.souvlakis=null
      this.souvlaki.nativeElement.value=null
      this.f=null
      
    }
    else{
      this.souvlakis="Σουβλάκι"
      this.f=this.souvlaki.nativeElement.value*1.30
      this.souv=this.souvlaki.nativeElement.value
    }
    if(this.tzatziki.nativeElement.value==0||this.tzatziki.nativeElement.value==null){
      this.tzatzikis=null
      this.tzatziki.nativeElement.value=null
      this.k=null
      
    }

    else{
      this.tzatzikis="Τζατζίκι"
      this.k=this.tzatziki.nativeElement.value*2.5
      this.tzatz=this.tzatziki.nativeElement.value
      
    }
    
    if(this.soutzoukaki.nativeElement.value==0||this.soutzoukaki.nativeElement.value==null){
      this.soutzoukakis=null
      this.soutzoukaki.nativeElement.value=null
      this.s=null
    }
    else{
      this.soutzoukakis="Σουτζουκάκι"
      this.s=this.soutzoukaki.nativeElement.value*1.3
      this.soutz=this.soutzoukaki.nativeElement.value
    }
    if(this.sandwitchMono.nativeElement.value==0||this.sandwitchMono.nativeElement.value==null){
      this.sandwitchMonos=null
      this.sandwitchMono.nativeElement.value=null
      this.sM=null
    }
    else{
      this.sandwitchMonos="Σάντουιτς μονό"
      this.sM=this.sandwitchMono.nativeElement.value*2.5
      this.sandM=this.sandwitchMono.nativeElement.value
    }
    if(this.sandwitchDiplo.nativeElement.value==0||this.sandwitchDiplo.nativeElement.value==null){
      this.sandwitchDiplos=null
      this.sandwitchDiplo.nativeElement.value=null
      this.sD=null
    }
    else{
      this.sandwitchDiplos="Σάντουιτς διπλό"
      this.sD=this.sandwitchDiplo.nativeElement.value*3
      this.sandD=this.sandwitchDiplo.nativeElement.value
    }
    if(this.xoriatiki.nativeElement.value==0||this.xoriatiki.nativeElement.value==null){
      this.xoriatikis=null
      this.xoriatiki.nativeElement.value=null
      this.x=null
    }
    else{
      this.xoriatikis="Χωριάτικη"
      this.x=this.xoriatiki.nativeElement.value*3
      this.xor=this.xoriatiki.nativeElement.value
    }
    if(this.psomi.nativeElement.value==0||this.psomi.nativeElement.value==null){
      this.psomis=null
      this.psomi.nativeElement.value=null
      this.p=null
    }
    else{
      this.psomis="Ψωμί"
      this.p=this.psomi.nativeElement.value*0.5
      this.pso=this.psomi.nativeElement.value
    }
    if(this.retsina.nativeElement.value==0||this.retsina.nativeElement.value==null){
      this.retsinas=null
      this.retsina.nativeElement.value=null
      this.r=null
    }
    else{
      this.retsinas="Ρετσίνα"
      this.r=this.retsina.nativeElement.value*3
      this.ret=this.retsina.nativeElement.value
    }
    if(this.bira.nativeElement.value==0||this.bira.nativeElement.value==null){
      this.biras=null
      this.bira.nativeElement.value=null
      this.bir=null
    }
    else{
      this.biras="Μπύρα"
      this.bir=this.bira.nativeElement.value*2.5
      this.bi=this.bira.nativeElement.value
    }
    if(this.coca.nativeElement.value==0||this.coca.nativeElement.value==null){
      this.cocas=null
      this.coca.nativeElement.value=null
      this.c=null
    }
    else{
      this.cocas="Κόκα-Κόλα"
      this.c=this.coca.nativeElement.value*1.5
      this.coc=this.coca.nativeElement.value
    }
    if(this.nero.nativeElement.value==0||this.nero.nativeElement.value==null){
      this.neros=null
      this.nero.nativeElement.value=null
      this.n=null
     
    }
    else{
      this.neros="Νερό"
      this.n=this.nero.nativeElement.value*0.5
      this.ner=this.nero.nativeElement.value
    }
    if(this.portokalada.nativeElement.value==0||this.portokalada.nativeElement.value==null){
      this.portokaladas=null
      this.portokalada.nativeElement.value=null
      this.por=null
    }
    else{
      this.portokaladas="Πορτοκαλάδα"
      this.por=this.portokalada.nativeElement.value*1.5
      this.port=this.portokalada.nativeElement.value
    }
    
    this.z=!this.z;
     }
   }
increaseSouvlaki(){
 this.counterSouvlaki+=1
 this.souvlaki.nativeElement.value=this.counterSouvlaki
  
}
increaseSoutzoukaki(){
  this.counterSoutzoukaki+=1
  this.soutzoukaki.nativeElement.value=this.counterSoutzoukaki
   
 }
increaseTzatziki(){
  this.counterTzatziki+=1
  this.tzatziki.nativeElement.value=this.counterTzatziki
   
 }

 increaseSandwitchMono(){
  this.counterSandwitchMono+=1
  this.sandwitchMono.nativeElement.value=this.counterSandwitchMono
   
 }
 increaseSandwitchDiplo(){
  this.counterSandwitchDiplo+=1
  this.sandwitchDiplo.nativeElement.value=this.counterSandwitchDiplo
   
 }
 increaseXoriatiki(){
  this.counterXoriatiki+=1
  this.xoriatiki.nativeElement.value=this.counterXoriatiki
   
 }
 increaseRetsina(){
  this.counterRetsina+=1
  this.retsina.nativeElement.value=this.counterRetsina
   
 }
 increaseBira(){
  this.counterBira+=1
  this.bira.nativeElement.value=this.counterBira
   
 }
 increaseCoca(){
  this.counterCoca+=1
  this.coca.nativeElement.value=this.counterCoca
   
 }
 increaseNero(){
  this.counterNero+=1
  this.nero.nativeElement.value=this.counterNero
   
 }
 increasePortokalada(){
  this.counterPortokalada+=1
  this.portokalada.nativeElement.value=this.counterPortokalada
   
 }
 increasePsomi(){
  this.counterPsomi+=1
  this.psomi.nativeElement.value=this.counterPsomi
   
 }

 printPage() {
  window.print();
  
    this.z=!this.z;
    this.paragelia=!this.paragelia
       
    this.tzatziki.nativeElement.value=null;
    this.souvlaki.nativeElement.value=null;
    this.soutzoukaki.nativeElement.value=null;
    this.sandwitchMono.nativeElement.value=null;
    this.sandwitchDiplo.nativeElement.value=null;
    this.xoriatiki.nativeElement.value=null;
    this.psomi.nativeElement.value=null;
    this.retsina.nativeElement.value=null;
    this.bira.nativeElement.value=null;
    this.coca.nativeElement.value=null;
    this.nero.nativeElement.value=null;
    this.portokalada.nativeElement.value=null;
    this.f=0;
    this.k=0;
    
    this.s=0;
    this.sM=0;
    this.sD=0;
    this.x=0;
    this.p=0;
    this.r=0;
    this.bir=0;
    this.c=0;
    this.n=0;
    this.por=0;
    this.sinolo=0
    this.paragelia=false;
    this.isDisabled = false;

    this.counterSouvlaki=0
this.counterTzatziki=0

this.counterSoutzoukaki=0
this.counterSandwitchMono=0
this.counterSandwitchDiplo=0
this.counterXoriatiki=0
this.counterPsomi=0
this.counterRetsina=0
this.counterBira=0
this.counterCoca=0
this.counterNero=0
this.counterPortokalada=0

this.souv=null
this.tzatz=null
this.soutz=null
this.sandD=null
this.sandM=null
this.xor=null
this.pso=null
this.ret=null
this.bi=null
this.coc=null
this.ner=null
this.port=null
}




logout(){
  this.h=null
  delete this.h
    localStorage.clear()
    sessionStorage.setItem('loggedUser', this.h);
   
    this.router.navigate(['login']);
  } 
  }
  
  

  
  