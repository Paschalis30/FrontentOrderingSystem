import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';

import{AdministratorComponent} from './administrator/administrator.component';
import{SaladService}from './services/SaladService.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import{OrdersComponent} from './orders/orders.component';
import{RestApiService} from './services/restapi.service';
import { MainPageComponent } from './main-page/main-page.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import{ForgotPasswordService} from './services/forgot-password.service';
import { MessageComponent } from './message/message.component';
import { PaypalComponent } from './paypal/paypal.component';







@NgModule({
  declarations: [
    AppComponent,LoginComponent,AdministratorComponent,OrdersComponent, MainPageComponent, LogOutComponent, ForgotPasswordComponent,RegisterComponent, MessageComponent, PaypalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [SaladService,RestApiService,ForgotPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
