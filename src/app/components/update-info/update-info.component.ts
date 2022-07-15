import { Observable } from 'rxjs';
import { ClientMessage } from './../../models/client-message';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})


export class UpdateInfoComponent implements OnInit {
  title = 'Update User Information:'
  clientMessage: ClientMessage = new ClientMessage('');
 
  constructor(
    private userService: UserService, 
    private user: User,
    private authService: AuthService,
     private router: Router) { }
     
  id = this.authService.currentUserId()
  currentUser: any = this.userService.findUserById(this.id)

  ngOnInit(): void{
    if(!this.authService.isLoggedIn()){
      this.router.navigate(["/login"]);
    }
    if(!this.authService.currentUserId()){
      this.userService.updateUser(this.currentUser)
       .subscribe(
         data =>{
          this.authService.currentUserId() = data;
          this.u
      }else{
      }
      
      
    )


  }
  }

   
}
