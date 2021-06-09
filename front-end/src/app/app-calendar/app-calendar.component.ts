import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../services/calendar.service";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {SecurityService} from "../services/security.service";
import {Cours} from "../classes/classe";

@Component({
  selector: 'app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.scss']
})
export class AppCalendarComponent implements OnInit {
    textFilter = "";

    constructor(private http: HttpClient,
        private calendarService: CalendarService,
        private datePipe: DatePipe,
        private security: SecurityService) {
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

    classeDoesntHappenyet(datetime) {
        if (this.isGranted()) {
            return true;
        }

        return parseInt(datetime) >= parseInt(this.datePipe.transform(new Date(), 'yyyyMMdd'));
    }

    isGranted() {
        return !this.security.isStudent;
    }
}
