import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeader } from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {OverlayModule} from '@angular/cdk/overlay';
import { BoxOverlayComponent } from './box-overlay/box-overlay.component';

@NgModule({
  exports: [
    OverlayModule
  ],
  declarations: [
    AppComponent,
    MainHeader,
    BoxOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
