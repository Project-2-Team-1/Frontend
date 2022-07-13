import { Timestamp } from "rxjs";

export class Review{
    id: number;
    rating: number;
    content: string;
    date: string; //to add timestamp or date later
    park_id: number;
    user_id: number;

  constructor(
    id: number, 
    rating: number, 
    content: string, 
    date: string, 
    park_id: number, 
    user_id: number
) {
    this.id = id
    this.rating = rating
    this.content = content
    this.date = date
    this.park_id = park_id
    this.user_id = user_id
  }

}