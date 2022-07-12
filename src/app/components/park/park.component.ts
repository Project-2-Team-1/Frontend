import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  park: any;

  constructor() { }

  ngOnInit(): void {
  }

  setPark(park:any) {
    this.park = park;
    console.log(this.park);
  }

}
