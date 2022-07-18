import { UserService } from './../../service/user.service';
import { User } from 'src/app/models/user';
import { ClientMessage } from './../../models/client-message';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  title = 'Please Register Below:'

  user: User = new User(0, ``, ``, ``, ``, ``, [], []);
  clientMessage: ClientMessage = new ClientMessage('');
  requiredForm = this.fb.group({
    firstName: ['', Validators.required ],
    lastName: ['', Validators.required ],
    email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$") ],
    password: ['', Validators.required, Validators.minLength(8) ],
    username: ['', Validators.required, Validators.minLength(2) ],
  });


  constructor(private userService: UserService, private fb: FormBuilder) {

  }

  ngOnInit()
  {


  }

  myForm() {

  }

  registerUser(): void {

        this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully Registered ${data.firstName}`,
      error => this.clientMessage.message = `Something went wrong.  Error ${error}`
    )
  }


}
