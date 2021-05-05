import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import{AdministratorComponent}from './administrator/administrator.component';
import{OrdersComponent} from './orders/orders.component';
import{MainPageComponent} from './main-page/main-page.component';
import{LogOutComponent} from './log-out/log-out.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MessageComponent } from './message/message.component';
import{PaypalComponent} from './paypal/paypal.component';




const routes: Routes = [
  {path: ' ', redirectTo: '', pathMatch: 'full'},
{path: '', component: MainPageComponent},

{path: ' ', redirectTo: 'Message', pathMatch: 'full'},
{path: 'Message', component: MessageComponent},

  {path: ' ', redirectTo: 'register', pathMatch: 'full'},
{path: 'register', component: RegisterComponent},

{path: ' ', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},

{path: 'login ', redirectTo: 'administrator', pathMatch: 'full'},
{path: 'administrator', component:AdministratorComponent },

{path: 'administrator ', redirectTo: 'orders', pathMatch: 'full'},
{path: 'orders', component:OrdersComponent },
{path: 'register ', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component:LoginComponent },
{path: 'login ', redirectTo: 'register', pathMatch: 'full'},
{path: 'register', component:RegisterComponent },
{path: 'login ', redirectTo: '', pathMatch: 'full'},
{path: '', component:MainPageComponent },
{path: 'register ', redirectTo: '', pathMatch: 'full'},
{path: '', component:MainPageComponent },
{ path: 'logout', component: LogOutComponent},
{path: 'login ', redirectTo: '', pathMatch: 'full'},
{path: '', component:MainPageComponent },
{path: 'login ', redirectTo: 'forgott-password', pathMatch: 'full'},
{path: 'forgott-password', component:ForgotPasswordComponent },
{path: ' ', redirectTo: 'Paypal', pathMatch: 'full'},
{path: 'Paypal', component:PaypalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
