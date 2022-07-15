import { UserService } from './../../service/user.service';
import { ParkService } from './../../service/park.service';
import { AuthService } from 'src/app/service/auth.service';
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
  user: any = {

  };
  reviewed: boolean = false;
  reviewId: number | null = null;
  loading: boolean = true;


  constructor(
    private userService: UserService,
    private reviewService: ReviewService,
    private parkService: ParkService, 
    private dataService: DataService, 
    public authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    // this.dataService.park = placeholder.data[0]; // Remove this line for actual use - testing purposes only
    let temp = this.dataService.park;
    if(!temp?.parkCode){
      let parkCode = sessionStorage.getItem("park");
      if(parkCode?.length === 4) {
        await this.parkService.getParkByParkCode(parkCode)
          .subscribe(result => {
            this.park = result.data[0];
            this.checkUser();
          })
      }
      return;
    } else {
      this.park = temp;
      this.checkUser();
    }
    
  }

  addPark() {
    let body = {
      parkCode: this.park.parkCode,
      user: {
        id: this.user.id
      }
    }
    this.reviewService.uploadReview(body)
        .subscribe((response) => {
          console.log(response);
          document.getElementById("add-park")?.setAttribute("disabled", "true");
          this.reviewed = true;
        })
  }

  checkUser() {
    if(!this.dataService.user) {
      this.userService.findUserById(this.authService.currentUserId())
        .subscribe((response) => {
          this.dataService.user = response;
          this.user = this.dataService.user;
          while(!this.park){
          }
          this.checkReviews();
        });
    } else {
      this.user = this.dataService.user;
      this.checkReviews();
    }
  }

  checkReviews() {
    this.reviewService.findReviewsByParkCode(this.park.parkCode).subscribe(response => {
      this.reviews = response.filter((r) => {
        return r.content != ""
      });
      this.reviews.forEach((r: any) => {
        let date = new Date(r.dateReviewed);
        r.date = date;
        return r;
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
      let result = this.user.reviews.filter((r: any) => r.parkCode === this.park.parkCode);
      if(result.length > 0) {
        this.reviewed = true;
        let review = result[0];
        this.rating = review.rating;
        this.content = review.content;
        this.reviewId = review.id;
      }
      this.loading = false;
    });
  }
 
  submitReview() {
    console.log("clicked")
    if(this.rating){
      let body: any = {
        rating: this.rating,
        content: this.content,
        parkCode: this.park.parkCode,
        dateReviewed: Date.now(),
        user: {
          id: this.user.id
        }
      }
      if(this.reviewed){
        body.id = this.reviewId;
      }
      this.reviewService.uploadReview(body)
        .subscribe((response) => {
          let result = this.reviews.filter((r: any) => r.id === response.id);
          if(result.length === 0 && response.content.trim()) {
            let review: any = { ...response }
            review.date = new Date(response.dateReviewed);
            this.reviews.push(review);
          } else {
            let i = this.reviews.indexOf(result[0]);
            this.reviews[i].content = response.content;
            this.reviews[i].rating = response.rating;
            this.reviews[i].dateReviewed = response.dateReviewed;
            this.reviews[i].date = new Date(response.dateReviewed);
          }
          this.reviewId = response.id;
        })
      document.getElementById("modal-close")?.click();
      this.rating = 0;
      this.content = "";
    }
  }

}
