import { UserService } from './../../service/user.service';
import { USER_PLACEHOLDER } from './placeholder';
import { DataService } from './../../service/data.service';
import { Router } from '@angular/router';
import { ParkService } from './../../service/park.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'dashboard',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  
  user: any;
  parks: any[] = [];

  constructor(
    private authService: AuthService, 
    private dataService: DataService, 
    private parkService: ParkService,
    private userService: UserService, 
    private router: Router
  ) { }

  userData(): any{      
    
  } 

  ngOnInit(): void {
    // this.dataService.user = USER_PLACEHOLDER;
    if(!this.authService.isLoggedIn()){
      this.router.navigate(["/login"]);
    }
    if(!this.dataService.user) {
      this.userService.findUserById(this.authService.currentUserId())
        .subscribe((response) => {
          this.dataService.user = response;
          this.user = this.dataService.user; // For live
          this.getSavedParks();
        });
    } else {
      this.user = this.dataService.user; // For live
      this.getSavedParks();
    }
  }

  private getSavedParks() {
    let codes = [];
    for(let r of this.user.reviews) {
      if(r.saved) {
        codes.push(r.parkCode);
      }
    }
    try {
      this.parkService.getParksByParkCode(codes)
        .subscribe((result) => {
          this.parks = result.data;
        });
    } catch (e: any) {
      this.parks = [];
    }
    
  }
}
