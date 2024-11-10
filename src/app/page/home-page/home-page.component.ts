import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router) { }

  goToSignupPage(): void {
    this.router.navigate(['/signin-page']);
  }
  

}
