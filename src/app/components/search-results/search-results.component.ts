import { ParkService } from './../../service/park.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  parks: Object[] = [];
  query: string = "";
  state: string = "";
  message: string = "";

  constructor(private parkService: ParkService) { }

  ngOnInit(): void {
  }

  search() {
    this.query = this.query.trim();
    let response;
    if(this.query && this.state) {
      response = this.parkService.searchParksByQueryAndState(this.query, this.state);
    } else if (this.query) {
      response = this.parkService.searchParksByQuery(this.query);
    } else if (this.state) {
      response = this.parkService.searchParksByState(this.state);
    } else {
      this.message = "Bad input";
    }
    response?.subscribe(res => {
      console.log(res);
    })
  }
}
