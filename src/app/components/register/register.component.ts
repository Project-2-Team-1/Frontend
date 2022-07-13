import { UserService } from './../../service/user.service';
import { User } from 'src/app/models/user';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User'

  user: User = new User(0, ``, ``, ``, ``, ``, [], []);
  clientMessage: ClientMessage = new ClientMessage('');

  constructor(private userService: UserService) { }

  registerUser(): void {

        this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully Registered ${data.firstName}`,
      error => this.clientMessage.message = `Something went wrong.  Error ${error}`
    )
  }


}