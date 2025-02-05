import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataTablesResponse } from '../../type/datatable.type';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private _httpClient: HttpClient) { }

  getPage(dataTablesParameters: any, id: number = 3): Observable<DataTablesResponse> {

    return this._httpClient
      .get(
        environment.baseURL + '/users/role/' + id,
        dataTablesParameters
      )
      .pipe(
        switchMap((response: any) => {

          return of(response);
        })
      );
  }

  create(data: FormData): Observable<any> {
    return this._httpClient
      .post<any>(environment.baseURL + '/users/register', data)
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }

  getbyID(id:number): Observable<any> {
    return this._httpClient
      .get<any>(environment.baseURL + '/users/' + id)
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }

  update(data: FormData,id:number): Observable<any> {
    return this._httpClient
      .patch<any>(environment.baseURL + '/users/'+id, data)
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }

  delete(id:number): Observable<any> {
    return this._httpClient
      .delete<any>(environment.baseURL + '/users/'+id)
      .pipe(
        switchMap((response: any) => {
          return of(response);
        })
      );
  }
}
