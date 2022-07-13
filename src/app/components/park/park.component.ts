import { DataService } from './../../service/data.service';
import { ReviewService } from './../../service/review.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {

  park: any = {
    fullName: ""
  };
  reviews: any[] = [];
  overallRating: number = 0;
  content: string = "";
  rating: number = 0;


  constructor(private reviewService: ReviewService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.park = {
      parkCode: "mora",
      fullName: "Mount Rainier National Park",
      name: "Rainier"
    }
    let temp = this.dataService.park;
    if(!temp?.parkCode){
      return;
    }
    this.park = temp;
    this.reviewService.findReviewsByParkCode(this.park.parkCode).subscribe(response => {
      console.log(response)
      this.reviews = response.filter((r) => {
        console.log(r.content);
        return r.content != ""
      });
      let sum = 0;
      let length = 0;
      for(let r of response) {
        if(r.rating > 0) {
          length++;
        }
        sum += r.rating;
      }
      this.overallRating = sum / length;
    });
    console.log(this.park, this.reviews);
  }

  submitReview() {
    console.log("clicked")
    if(this.content.trim() && this.rating){
      document.getElementById("modal-close")?.click();
      this.rating = 0;
      this.content = "";
    }
  }

}
