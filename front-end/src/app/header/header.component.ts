import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CalendarService } from "../services/calendar.service";

@Component({
  selector: 'main-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class MainHeader {
  title = 'Header';
  formationsArray = [];

  constructor(private http: HttpClient,
              private calendarService: CalendarService) {
    this.fetchAllFormations();
  }

  fetchAllFormations() {
    this.http.get<any>(this.calendarService.baseUrl + "/formation")
      .subscribe(data => {
        this.formationsArray = data.data;
      });
  }

  getFormationsList() {
    return this.formationsArray;
  }

  fetchClasses(value) {
    this.calendarService.currentSelection = value;
    this.calendarService.fetchCurrentClasses();
  }
}

