import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../services/calendar.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.scss']
})
export class AppCalendarComponent implements OnInit {
    constructor(private http: HttpClient,
        private calendarService: CalendarService) {
    }

    ngOnInit(): void {

    }

    getCalendarService() {
        return this.calendarService;
    }

    getBackgroundForClassType(classeType) {
        switch (classeType) {
            case "TP":
                return "#3498db";
                break;
            case "Examen":
                return "#e74c3c";
                break;
            case "TD":
                return "#f1c40f";
                break;
            case "Cours":
                return "#1abc9c";
                break;
            default:
                return "#bdc3c7";
        }
    }
}
