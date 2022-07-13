import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ParkComponent } from './components/park/park.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsListItemComponent } from './components/search-results-list-item/search-results-list-item.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateInfoComponent } from './components/update-info/update-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ...routingComponents,
    SearchResultsListItemComponent,
    NavComponent,
    HomeComponent,
    UpdateInfoComponent
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
