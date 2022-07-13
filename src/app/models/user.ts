export class User{
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;

  constructor(
    id: number, 
    firstName: string, 
    lastName: string, 
    username: string, 
    password: string, 
    email: string,
   // parks: Park[],
   // review: Review[]
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.email = email
  }
    email: string;
}