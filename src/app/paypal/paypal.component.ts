import { createOptional } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})

export class PaypalComponent implements OnInit {

  constructor() {  }



  @ViewChild("paypalRef",{static:true})private paypalRef:ElementRef
  ngOnInit(): void {
    window.paypal.Buttons(
{
style:{
  layout:"horizontal",
  color:"blue",
  shape:"rect",
  label:"paypal"
},
createOrder:(data,actions)=>{
  return actions.order.create({
    purchase_units:[{
      amount:{
        value:'1000',
        currency_code:'USD'
      }
    }]
  }

  )
},
onApprove:(data,actions)=>{
  return actions.order.capture().then(details=>{alert("Transactions completed")})
},
onError:error=>{
  return console.log("error")
}


}

    ).render(this.paypalRef.nativeElement)

  
    
}

}


