import { Component } from '@angular/core';
import {SecurityService} from "./services/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'front-end';

    constructor(public security: SecurityService) {
    }

    isLogged() {
        return this.security.isLogged;
    }

    disconnect() {
        this.security.disconnect();
    }

    getLoginInfo() {
        return this.security.loggedName;
    }
}
