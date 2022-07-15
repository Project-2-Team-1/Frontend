import { SearchResultsListItemComponent } from './components/search-results-list-item/search-results-list-item.component';
import { UpdateInfoComponent } from './components/update-info/update-info.component';
import { HomeComponent } from './components/home/home.component';
import { ParkComponent } from './components/park/park.component';
import { UserComponent } from './components/user/user.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "search", component: SearchResultsComponent},
  {path: "dashboard", component: UserComponent},
  {path: "park", component: ParkComponent},
  {path: "update-info", component: UpdateInfoComponent},
  {path: "home", component: HomeComponent},
  {path: "search-results-list-item", component: SearchResultsListItemComponent},
  {path: "search-results", component: SearchResultsComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  
  {path: "", component: HomeComponent},
  {path: "**", redirectTo: ""}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent, 
  RegisterComponent, 
  SearchResultsComponent, 
  ParkComponent,
  UserComponent,
  UpdateInfoComponent,
  HomeComponent,
  SearchResultsComponent,
  SearchResultsListItemComponent
  
];
