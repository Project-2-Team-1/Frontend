import { Observable } from 'rxjs';
import { ClientMessage } from './../../models/client-message';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';
import {DataService} from "../../service/data.service";

@Component({
  selector: 'update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})


export class UpdateInfoComponent implements OnInit {
  title = 'Update User Information:'
  clientMessage: ClientMessage = new ClientMessage('');

  user: User = new User(0, ``, ``, ``, ``, ``, [], []);

  constructor(
    private userService: UserService,
    private authService: AuthService,
     private router: Router,
    private dataService: DataService) { }


  ngOnInit(): void{
    if(!this.authService.isLoggedIn()){
      this.router.navigate(["/login"]);
    }
    if(!this.dataService.user){
      this.userService.findUserById(this.authService.currentUserId())
       .subscribe(
         response =>{
           this.dataService.user = response;
           this.user = this.dataService.user;
      });
    }else {this.user = this.dataService.user;}
  }

  public updateUser(){
    this.userService.updateUser(this.user)
      .subscribe(
        response => {
          this.clientMessage.message = "User updated successfully";
          this.clientMessage.message = "success";
        }
      );
  }
}
