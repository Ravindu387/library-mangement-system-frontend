// app.component.ts
import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ''
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Navigate to home page on application load
    this.router.navigate(['/home']);
  }
}

// app-routing.module.ts

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
   
  
    {
        path:"login-page",
        component:LoginPageComponent
    },
    {
      path:"home/login-page",
      component:LoginPageComponent
  },
    {
        path:"signin-page",
        component:SignupPageComponent
    },
    {
      path:"signup-page",
      component:SignupPageComponent
  },
  {
    path:"signin-page/signup-page",
    component:LoginPageComponent
},
{
  path:"dashboard",
  component:DashboardPageComponent
},
{
  path:"dashboard/members",
  component:MemberComponent
},
{
  path:"dashboard/books",
  component:BooksComponent
},
{
  path:"dashboard/authors",
  component:AuthorComponent
},
{
  path:"dashboard/lending",
  component:LendingComponent
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// home.component.ts
import { Component } from '@angular/core';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { MemberComponent } from './page/member/member.component';
import { BooksComponent } from './page/books/books.component';
import { AuthorComponent } from './page/author/author.component';
import { LendingComponent } from './page/lending/lending.component';

@Component({
  selector: 'app-home',
  template: '<h1>Welcome to Home Page!</h1>'
})
export class HomeComponent {}
