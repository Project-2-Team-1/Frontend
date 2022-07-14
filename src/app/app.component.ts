import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JACL Adventure Finder';




}
