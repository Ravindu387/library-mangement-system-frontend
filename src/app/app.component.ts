import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./common/nav-bar/nav-bar.component";
import { HomePageComponent } from "./page/home-page/home-page.component";
import AOS from 'aos';
import { LoginPageComponent } from "./page/login-page/login-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomePageComponent, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'library-management-system';
  ngOnInit() {
    AOS.init({
      // you can add options here
      duration: 1000,
      once: true
    });
  }
}
