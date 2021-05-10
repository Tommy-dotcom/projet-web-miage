import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'main-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class MainHeader {
  title = 'Header';
  baseUrl = 'http://localhost:8000';
  formationsArray = [];

  constructor(private http: HttpClient) {
    this.fetchAllFormations();
  }

  fetchAllFormations() {
    this.http.get<any>(this.baseUrl + "/formation")
      .subscribe(data => {
        this.formationsArray = data.data;
      });
  }

  getFormationsList() {
    return this.formationsArray;
  }

  fetchClasses(value) {
    
  }
}

