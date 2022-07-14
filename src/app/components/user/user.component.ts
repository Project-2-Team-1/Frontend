import { ParkService } from './../../service/park.service';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'dashboard',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  user: any;

  constructor(public ParkService: UserService) { }

  userData(): any{      
    
  } 

  ngOnInit(): void {

  }

}
