import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  signOut(): void {
    window.location.reload();
    // this.isLoggedIn = false;
    // NgRx is state mgmt for Angular
  }

}
