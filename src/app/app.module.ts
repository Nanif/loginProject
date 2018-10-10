import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgModel } from '@angular/forms';
import "rxjs/Rx";
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule,Router } from '@angular/router';
import{User}from './models/user'
import {UserService}from'../app/services/user.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/auth/token.interceptor';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const route: Routes = [
    { path: '', component: LoginComponent },
     { path: '*', component: LoginComponent },
     { path: 'login', component: LoginComponent },
     {path:'page/dashboard/:name',component:DashboardComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, HttpClientModule, RouterModule.forRoot(route)
  ],
  providers: [UserService,AuthGuard,
    {
   
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
