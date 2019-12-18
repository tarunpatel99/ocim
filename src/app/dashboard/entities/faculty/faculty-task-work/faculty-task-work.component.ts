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
  selector: 'app-faculty-task-work',
  templateUrl: './faculty-task-work.component.html',
  styleUrls: ['./faculty-task-work.component.css']
})
export class FacultyTaskWorkComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(TaskWorkFormDialog, {
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


// Add task and work form dialog box
@Component({
  selector: 'dialog-task-work',
  templateUrl: 'add-task-work.form.html',
  styleUrls: ['add-task-work.form.css']
})
export class TaskWorkFormDialog {
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<TaskWorkFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onSave(): void {
    this.dialogRef.close();
  }

}