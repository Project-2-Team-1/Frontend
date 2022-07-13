import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  UserService: any;
  User: any;

  constructor(public userService: UserService, public appComponent: AppComponent, public user: UserComponent) { }

  ngOnInit(): void {
    this.userService.getMyParks(this.User.getId);
    this.userService.getMyReviews(this.User.getId);
  }

}
