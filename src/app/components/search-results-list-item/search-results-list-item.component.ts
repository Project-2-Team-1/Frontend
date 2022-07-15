import { UserService } from './../../service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { USER_PLACEHOLDER } from './../user/placeholder';
import { DataService } from './../../service/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-list-item',
  templateUrl: './search-results-list-item.component.html',
  styleUrls: ['./search-results-list-item.component.css']
})
export class SearchResultsListItemComponent implements OnInit {
  
  @Input() park: any;
  saved: boolean = false;
  myRating: number = 0;
  user: any;

  constructor(
    private authService: AuthService, 
    public dataService: DataService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.dataService.user = USER_PLACEHOLDER; // For testing
    if(!this.dataService.user){
      if(this.authService.isLoggedIn()) {
        this.userService.findUserById(this.authService.currentUserId())
          .subscribe(result => {
            this.dataService.user = result;
            this.user = this.dataService.user;
            this.getRating();
          })
      }
    }else {
      this.user = this.dataService.user;
      this.getRating();
    }
  }

  private getRating() {
    if(this.user.reviews.length > 0) {
      let res = this.user.reviews.filter((r: any) => r.parkCode === this.park.parkCode);
      if(res.length > 0) {
        this.saved = true;
        this.myRating = res[0].rating;
      }
    }
  }

  clickHandler() {
    this.dataService.park = this.park;
    sessionStorage.setItem("park", this.park.parkCode);
  }

  save() {

  }

}
