import { ParkComponent } from './../park/park.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-list-item',
  templateUrl: './search-results-list-item.component.html',
  styleUrls: ['./search-results-list-item.component.css']
})
export class SearchResultsListItemComponent implements OnInit {
  
  @Input() park: any;

  constructor(public parkComponent: ParkComponent) { }

  ngOnInit(): void {
  }

}
