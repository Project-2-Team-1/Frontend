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

  constructor(private authService: AuthService, private dataService: DataService, private parkService: ParkService, private router: Router) { }

  userData(): any{      
    
  } 

  ngOnInit(): void {
    // this.dataService.user = USER_PLACEHOLDER;
    if(!this.authService.isLoggedIn()){
      this.router.navigate(["/login"]);
    }
    this.user = this.dataService.user; // For live
    let codes = [];
    console.log(this.user.reviews);
    for(let r of this.user.reviews) {
      codes.push(r.parkCode);
    }
    console.log(codes);
    this.parkService.getParksByParkCode(codes)
      .subscribe((result) => {
        console.log(result);
        this.parks = result.data;
      });
  }

}
