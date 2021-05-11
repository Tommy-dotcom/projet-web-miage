import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-box-overlay',
  templateUrl: './box-overlay.component.html',
  styleUrls: ['./box-overlay.component.scss']
})
export class BoxOverlayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BoxOverlayComponent>) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  add(): void{
  }
}
