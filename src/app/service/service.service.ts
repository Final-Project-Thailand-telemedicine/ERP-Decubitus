import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _httpClient: HttpClient) { }

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
    // Simulate login
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      return of({ success: true });
    } else {
      throw new Error('Invalid credentials');
    }
  }

  recoverPassword(email: string) {
    // Simulate password recovery
    return of({ success: true });
  }
}
