import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {BoxOverlayComponent} from '../box-overlay/box-overlay.component';
import { CalendarService } from "../services/calendar.service";
import {SecurityService} from "../services/security.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-main-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class MainHeaderComponent implements OnInit {
  title = 'Header';
  baseUrl = 'http://localhost:8000';
  formationsArray = [];

  constructor(private http: HttpClient, public dialog: MatDialog, private calendarService: CalendarService, private security: SecurityService) {
    this.fetchAllFormations();
  }

  ngOnInit(): void {
      if (this.security.isStudent) {
          this.calendarService.currentSelection = this.security.studentFormation;
          this.calendarService.fetchCurrentClasses();
      }
  }

  fetchAllFormations(): void{
    this.http.get<any>(this.baseUrl + '/formation')
      .subscribe(data => {
        this.formationsArray = data.data;
      });
  }

  getFormationsList() {
    return this.formationsArray;
  }

  addClass(): void {
      this.dialog.open(BoxOverlayComponent, {width: '500px'});
  }

  fetchClasses(value) {
    this.calendarService.currentSelection = value;
    this.calendarService.fetchCurrentClasses();
  }

  isGranted() {
      return !this.security.isStudent;
  }
}

