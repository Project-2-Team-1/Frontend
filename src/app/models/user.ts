import { Park } from "./Park";
import { Review } from "./Review";

export class User{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    parks: Park[];
    reviews: Review[];

  constructor(
    id: number, 
    firstName: string, 
    lastName: string, 
    username: string, 
    password: string, 
    email: string,
    parks: Park[],
    review: Review[]
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.email = email
    this.reviews = review
    this.parks = parks
  }
    
}