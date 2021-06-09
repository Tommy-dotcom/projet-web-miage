import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BoxOverlayComponent } from './box-overlay/box-overlay.component';
import { MainHeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {DatetimePickerModule} from '@sq-ui/ng-datetime-picker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from "@angular/forms";
import { AppCalendarComponent } from './app-calendar/app-calendar.component';
import { CalendarService } from "./services/calendar.service";
import {DatePipe} from '@angular/common';
import { AppSecurityComponent } from './app-security/app-security.component';
import {SecurityService} from "./services/security.service";

@NgModule({
  declarations: [
    AppComponent,
    BoxOverlayComponent,
    MainHeaderComponent,
    AppCalendarComponent,
    AppSecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatOptionModule,
    DatetimePickerModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CalendarService,
      DatePipe,
      SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
