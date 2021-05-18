import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = 'http://localhost:8000/classe';

  constructor(private http: HttpClient) { }

  register(userData) {
    console.log(userData);
    return this.http.post<any>(this.url, userData);
  }
}
