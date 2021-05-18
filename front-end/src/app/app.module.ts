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


@NgModule({
  declarations: [
    AppComponent,
    BoxOverlayComponent,
    MainHeaderComponent
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
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
