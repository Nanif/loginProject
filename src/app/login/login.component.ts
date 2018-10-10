import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Router, ActivatedRoute } from './../../../node_modules/@angular/router';
import { HttpErrorResponse } from './../../../node_modules/@angular/common/http';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  username: string;
  submitted: boolean;
  email: string;
  password: string;
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.submitted = false;
    localStorage.setItem('loggedIn', 'false')
  }

  login() {
    this.userService.login(this.email, this.password)
      .subscribe((user: any) => {
        this.user = user;
        localStorage.setItem("tokenKey", this.user.access_token)
        localStorage.setItem("loggedIn", 'true');
        console.log("dd" + this.user);
        this.username = this.user.first_name + '' + this.user.last_name;
        this.router.navigate(['/page/dashboard', this.username]);
      },
        (error: HttpErrorResponse) => {
          alert("שם משתמש או סיסמה שגויים")
        });
  }

  ngOnInit() { }

}

