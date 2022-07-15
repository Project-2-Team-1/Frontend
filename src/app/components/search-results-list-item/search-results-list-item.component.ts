import { DataService } from './../../service/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-results-list-item',
  templateUrl: './search-results-list-item.component.html',
  styleUrls: ['./search-results-list-item.component.css']
})
export class SearchResultsListItemComponent implements OnInit {
  
  @Input() park: any;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
