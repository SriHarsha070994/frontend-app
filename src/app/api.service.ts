import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected httpClient: HttpClient) {}
  getName(): Observable<string> {
    return this.httpClient.get<string>('http://localhost:8080/', {
      responseType: 'text' as 'json',
    });
  }
}
