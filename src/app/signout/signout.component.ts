import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatButtonModule } from '@angular/material/button'; // If you're using buttons


@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent {
  constructor(private router: Router) {}
  userProfileImage: string = 'assets/profile.jpg'; // Replace with actual image URL
  userName: string = 'John Doe';
  userRole: string = 'Administrator';
  onSignOut() {
    // Perform sign-out logic (clear tokens, session, etc.)
    localStorage.clear(); // Example: Clear user session data
    this.router.navigate(['/login']); // Redirect to login or home page
  }

  onCancel() {
    this.router.navigate(['/dashboard']); // Redirect back to home or dashboard
  }
}
