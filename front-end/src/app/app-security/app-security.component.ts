import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SecurityService} from "../services/security.service";

@Component({
  selector: 'app-security',
  templateUrl: './app-security.component.html',
  styleUrls: ['./app-security.component.scss']
})
export class AppSecurityComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private security: SecurityService) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required]],
        });
    }

    submit(): void {
        this.security.connect(this.form.value.email);
    }

    isOnError() {
        return this.security.error !== "";
    }

    getErrorMessage() {
        return this.security.error;
    }
}
