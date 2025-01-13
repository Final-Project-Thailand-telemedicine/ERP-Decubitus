import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataTablesResponse } from '../../type/datatable.type';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _httpClient: HttpClient) { }

  getPage(dataTablesParameters: any,id:number = 2): Observable<DataTablesResponse> {

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
        .post<any>(environment.baseURL + '/api/product', data)
        .pipe(
          switchMap((response: any) => {
            return of(response.data);
          })
        );
}
}
