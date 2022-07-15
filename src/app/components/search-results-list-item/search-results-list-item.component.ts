import { USER_PLACEHOLDER } from './../user/placeholder';
import { DataService } from './../../service/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results-list-item',
  templateUrl: './search-results-list-item.component.html',
  styleUrls: ['./search-results-list-item.component.css']
})
export class SearchResultsListItemComponent implements OnInit {
  
  @Input() park: any;
  saved: boolean = false;
  myRating: number = 0;
  user: any;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.user = USER_PLACEHOLDER; // For testing
    this.user = this.dataService.user;
    if(this.user.reviews) {
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
