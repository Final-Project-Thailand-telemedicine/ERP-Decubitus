import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  uploadImg(img: FormData): Observable<any> {
    return this._httpClient
      .post(
        environment.baseURL + '/api/upload_product_image',
        img,
      )
      .pipe(
        switchMap((response: any) => {
          return of(response.data);
        })
      );
  }
}
