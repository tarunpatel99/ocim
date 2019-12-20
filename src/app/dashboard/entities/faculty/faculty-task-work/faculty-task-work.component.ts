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

export interface subjectData {
  name: string
}

export interface classData {
  name: string,
  subjects: subjectData[]
}

@Component({
  selector: 'app-faculty-task-work',
  templateUrl: './faculty-task-work.component.html',
  styleUrls: ['./faculty-task-work.component.css']
})
export class FacultyTaskWorkComponent implements OnInit {


  selectedClass = { subjects: [] } as classData;
  constructor(public dialog: MatDialog) { }

  // dummy class and its subject data
  classNames: classData[] = [
    {
      name: "9th",
      subjects: [
        { name: "Maths" },
        { name: "Science" }
      ]
    },
    {
      name: "10th",
      subjects: [
        { name: "Maths" },
      ]
    },
    {
      name: "11th Commerce",
      subjects: [
        { name: "Statistics" },
        { name: "Accountancy " },
        { name: "English" }
      ]
    },
    {
      name: "11th Science",
      subjects: [
        { name: "English" }
      ]
    },
    {
      name: "12th Commerce",
      subjects: [
        { name: "Statistics" },
        { name: "Accountancy " },
        { name: "English" }
      ]
    },
    {
      name: "12th Science",
      subjects: [
        { name: "English" }
      ]
    },
    
  ]

  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(TaskWorkFormDialog, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // get selected class and display its subjects
  chooseClass(event, newClass) {
    this.selectedClass = newClass;  
    console.log(this.selectedClass.subjects)
  }

  ngOnInit() {
    // select first class from class list by default
    this.selectedClass = this.classNames[0]
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onSave(): void {
    this.dialogRef.close();
  }

}