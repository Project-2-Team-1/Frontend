import { ParkComponent } from './components/park/park.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsListItemComponent } from './components/search-results-list-item/search-results-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ...routingComponents,
    SearchResultsListItemComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ParkComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
