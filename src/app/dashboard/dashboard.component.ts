import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Route, Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:string;

  sub: any;
  page: number;
constructor( private router: Router,private route: ActivatedRoute) {}

ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.name = params['name']; 
 });
}
}