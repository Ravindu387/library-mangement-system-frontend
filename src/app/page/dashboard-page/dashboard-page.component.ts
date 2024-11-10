import { Component } from '@angular/core';
import { SideBarComponent } from '../../common/side-bar/side-bar.component';
import { MemberComponent } from '../member/member.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  constructor(private router: Router) { }

}
