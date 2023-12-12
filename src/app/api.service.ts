import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }

  sendData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data);
  }
}
