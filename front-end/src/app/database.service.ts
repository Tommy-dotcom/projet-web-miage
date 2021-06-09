import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  title = 'Header';
  baseUrl = 'http://localhost:8000';
  public formationsArray = [];
  public nameClassArray = [];
  public typeOfClassArray = [];
  public nameTeacherArray = [];
  public modalityArray = [];

  constructor(private http: HttpClient) {
    this.fetchAllFormations();
    this.fetchAllNameClass();
    this.fetchAllTypeOfClass();
    this.fetchAllNameTeacher();
  }

  fetchAllFormations(): void{
    this.http.get<any>(this.baseUrl + '/formation')
      .subscribe(data => {
        this.formationsArray = data.data;
      });
  }

  fetchAllNameClass(): void{
    this.http.get<any>(this.baseUrl + '/classe')
      .subscribe(data => {
      this.nameClassArray = data.data;
    });
  }

  fetchAllTypeOfClass(): void{
    this.http.get<any>(this.baseUrl + '/class_type')
      .subscribe(data => {
        this.typeOfClassArray = data.data;
      });
  }

  fetchAllNameTeacher(): void{
    this.http.get<any>(this.baseUrl + '/teacher')
      .subscribe(data => {
        this.nameTeacherArray = data.data;
      });
  }

  fetchModality(): void
  {
    this.http.get<any>(this.baseUrl + '/modality')
      .subscribe(data => {
        this.modalityArray = data.data;
      });
  }
}
