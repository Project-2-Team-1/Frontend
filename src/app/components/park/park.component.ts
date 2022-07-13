import { placeholder } from './placeholder';
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
  numRatings: number = 0;


  constructor(private reviewService: ReviewService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.park = placeholder.data[0]; // Remove this line for actual use - testing purposes only
    console.log(this.dataService.park)
    let temp = this.dataService.park;
    if(!temp?.parkCode){
      return;
    }
    this.park = temp;
    this.reviewService.findReviewsByParkCode(this.park.parkCode).subscribe(response => {
      this.reviews = response.filter((r) => {
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
      this.numRatings = length;
    });
  }

  submitReview() {
    console.log("clicked")
    if(this.content.trim() && this.rating){
      let body = {
        rating: this.rating,
        content: this.content,
        parkCode: this.park.parkCode,
        user: {
          id: 1 // TODO: Replace with dynamic value of logged in user
        }
      }
      this.reviewService.uploadReview(body)
        .subscribe((response) => {
          console.log(response);
          this.reviews.push(response);
        })
      document.getElementById("modal-close")?.click();
      this.rating = 0;
      this.content = "";
    }
  }

}
