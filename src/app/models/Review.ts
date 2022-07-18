import { Timestamp } from "rxjs";

export class Review{
    id: number;
    saved: boolean;
    rating: number;
    content: string;
    dateReviewed: number; //to add timestamp or date later
    parkCode: string;
    user: any;

  constructor(
    id: number, 
    saved: boolean,
    rating: number, 
    content: string, 
    date: number, 
    parkCode: string, 
    user: any
) {
    this.id = id
    this.saved = saved;
    this.rating = rating
    this.content = content
    this.dateReviewed = date
    this.parkCode = parkCode
    this.user = user
  }

}