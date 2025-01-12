import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated
    if (isAuthenticated) {
      return true;
    }
    return this.router.createUrlTree(['/login']); // Redirect to login if not authenticated
  }
}
