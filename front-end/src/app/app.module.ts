import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { MainHeader } from "./header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { AppCalendarComponent } from './app-calendar/app-calendar.component';
import { CalendarService } from "./services/calendar.service";

@NgModule({
  declarations: [
    AppComponent,
    MainHeader,
    AppCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
