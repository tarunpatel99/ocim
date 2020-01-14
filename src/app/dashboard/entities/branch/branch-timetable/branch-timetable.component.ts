import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';
import { ViewTimetableComponent } from './view-timetable/view-timetable.component';


export interface DialogData {
  class: string,
  subject: string,
  iss_date: Date, // Issue date
  sub_date: Date, // submission date
  title: string,
  description: string
}


@Component({
  selector: 'app-branch-timetable',
  templateUrl: './branch-timetable.component.html',
  styleUrls: ['./branch-timetable.component.css']
})

export class BranchTimetableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(TimeTableFormDialog, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  // open delete dialog box
  onDeleteTimeTable(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '500px',
      data: {}
    });
  }
  ngOnInit() {
  }


  // open dialog box
  onViewTimetable(url: string): void {
    const dialogRef = this.dialog.open(ViewTimetableComponent, {
      width: 'fit-content',
      panelClass: 'custom-dialog',
      data: {url: url}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}





// Add time table form dialog box
@Component({
  selector: 'dialog-time-table',
  templateUrl: 'time-table.form.html',
  styleUrls: ['time-table.form.css']
})
export class TimeTableFormDialog implements OnInit, OnDestroy{
  date = new FormControl(new Date());
  addTimeTableForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TimeTableFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancle(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // this.dialogRef.close();
    if (this.addTimeTableForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.addTimeTableForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      dateofTimeTable: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }
  ngOnDestroy() { }

}