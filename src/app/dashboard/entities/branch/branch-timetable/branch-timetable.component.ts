import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';


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
  ngOnInit() {
  }

}





// Add time table form dialog box
@Component({
  selector: 'dialog-time-table',
  templateUrl: 'time-table.form.html',
  styleUrls: ['time-table.form.css']
})
export class TimeTableFormDialog {
  date = new FormControl(new Date());s
  constructor(
    public dialogRef: MatDialogRef<TimeTableFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onSave(): void {
    this.dialogRef.close();
  }

}