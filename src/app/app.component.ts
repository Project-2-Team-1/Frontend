import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JACL Adventure Finder';
  
  username: string = '';

  updateUserData(username: string): void{
    this.username = username;
  }

}
