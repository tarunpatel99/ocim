import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-result-mark',
  templateUrl: './edit-result-mark.component.html',
  styleUrls: ['./edit-result-mark.component.css']
})
export class EditResultMarkComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditResultMarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
