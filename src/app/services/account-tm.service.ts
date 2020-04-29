import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountTmService {
  url = environment.url;

  constructor(private httpClient: HttpClient) { }

  nameInqury(payload: any) : Observable<any> {
    return this.httpClient.post(this.url + 'NameInquiry', payload);
  }

  fundsTransfer(payload: any) : Observable<any> {
    return this.httpClient.post(this.url + 'FundsTransfer', payload);
  }
}
