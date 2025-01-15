import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient,
    private router: Router,
  ) { }

  getlist(): Observable<any[]> {
    return this._httpClient.get<any[]>(
      environment.baseURL + '/roles'
    ).pipe(
      switchMap((response: any) => {
        return of(response);
      })
    );
  }
  login(credentials: { username: string; password: string }) {
    const body = {
      ssid: credentials.username,
      password: credentials.password,
    };
  
    this._httpClient.post(environment.baseURL + '/auth/login', body).pipe(
      switchMap((response: any) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
  
        return this.router.navigate(['/dashboard']);
      }),
      catchError((error) => {
        // Handle error and log it
        console.error('Login failed', error);
  
        alert('Login failed. Please check your credentials.');
  
        return of(null);
      })
    ).subscribe();
  }
  

  recoverPassword(email: string) {
    // Simulate password recovery
    return of({ success: true });
  }
}
