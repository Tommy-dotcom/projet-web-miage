import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RegistrationService} from '../registration.service';
import {DateAdapter} from '@angular/material/core';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-box-overlay',
  templateUrl: './box-overlay.component.html',
  styleUrls: ['./box-overlay.component.scss']
})
export class BoxOverlayComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<BoxOverlayComponent>, private fb: FormBuilder, private dateAdapter: DateAdapter<Date>, private registrationService: RegistrationService, public dataBaseService: DatabaseService) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', [Validators.required]],
      hours: ['', Validators.required],
      formation: ['', Validators.required],
      duration: ['', Validators.required],
      nameClass: ['', Validators.required],
      typeOfClass: ['', Validators.required],
      nameTeacher: ['', Validators.required],
      modality: ['', Validators.required],
    });

    this.dataBaseService.fetchAllFormations();
    this.dataBaseService.fetchAllNameClass();
    this.dataBaseService.fetchAllTypeOfClass();
    this.dataBaseService.fetchAllNameTeacher();
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialogRef.close(this.form.value);
    this.registrationService.register(this.form.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error', error)
      );
    /*console.log('Données du formulaire', this.form.value);
    console.log('Champs date', this.form.get('date').value);*/
  }

}
