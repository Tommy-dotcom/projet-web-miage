import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainHeader } from './header.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MainHeader
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainHeader]
})
export class HeaderModule { }
