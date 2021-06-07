import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = 'http://localhost:8000/classe';

  constructor(private http: HttpClient) { }

  register(userData) {

    const body = new HttpParams()
      .set('title', userData.nameClass)
      .set('happenAt', userData.date)
      .set('duration', userData.duration)
      .set('createdBy', userData.nameTeacher)
      .set('classeType', userData.typeOfClass)
      .set('formation', userData.modality);

    return this.http.post<any>(this.url, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
