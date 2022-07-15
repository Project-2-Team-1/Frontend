import { Observable } from 'rxjs';
import { ClientMessage } from './../../models/client-message';
import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})


export class UpdateInfoComponent implements OnInit {
  title = 'Update User Information:'
  clientMessage: ClientMessage = new ClientMessage('');
 
  constructor(private userService: UserService, private user: User, private authService: AuthService) { }
  username = this.authService.currentUser()
  currentUser: any = this.userService.findUserByUsername(this.username)

  updateUserInfo(){
    this.userService.updateUser(this.currentUser)
    .subscribe(
      data =>{
        this.user = data;
        this.clientMessage.message = ''
      },
      () => this.clientMessage.message =`Can't Update User Information`
    )
  }

// let currUser = this.userService.findUserByUsername(this.authService.currentUser());
//   updateUserInfo(){
//     let u = this.userService.findUserByUsername(this.authService.currentUser());
//     this.userService.updateUser(u)
//   }

  ngOnInit(){


  }

}
