import { ParkComponent } from './components/park/park.component';
import { UserComponent } from './components/user/user.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "search", component: SearchResultsComponent},
  {path: "dashboard", component: UserComponent},
  {path: "park", component: ParkComponent}

  
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
  UserComponent, 
  ParkComponent,
  
];
