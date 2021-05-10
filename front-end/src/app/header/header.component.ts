import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'main-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class MainHeader {
  title = 'Header';
  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<any[]>(this.baseUrl + "/formation")
      .subscribe(data => {
        console.log(data);
      });
  }

  addClass() {
  }


}

