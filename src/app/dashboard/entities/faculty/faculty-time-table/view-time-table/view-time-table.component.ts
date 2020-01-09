import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-time-table',
  templateUrl: './view-time-table.component.html',
  styleUrls: ['./view-time-table.component.css']
})
export class ViewTimeTableComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<ViewTimeTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
