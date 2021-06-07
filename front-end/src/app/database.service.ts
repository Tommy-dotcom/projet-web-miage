import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  title = 'Header';
  baseUrl = 'http://localhost:8000';
  formationsArray = [];
  nameClassArray = [];
  typeOfClassArray = [];
  nameTeacherArray = [];
  modalityArray = [];

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
        console.log(data.data);
      });
  }

  fetchAllNameClass(): void{
    this.http.get<any>(this.baseUrl + '/classe')
      .subscribe(data => {
      this.nameClassArray = data.data;
    });
  }

  fetchAllTypeOfClass(): void{
    this.http.get<any>(this.baseUrl + '/classe_type')
      .subscribe(data => {
        this.typeOfClassArray = data.data;
      });
  }

  fetchAllNameTeacher(): void{
    this.http.get<any>(this.baseUrl + '/user')
      .subscribe(data => {
        this.nameTeacherArray = data.data;
      });
  }
}
