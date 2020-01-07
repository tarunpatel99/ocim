import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatTabChangeEvent } from '@angular/material';

export interface DialogData {
  class?: string, // "?" it specify that not required field
  subject?: string,
  iss_date: Date, // Issue date
  sub_date: Date, // submission date
  title: string,
  description: string
}

export interface subjectData {
  name: string
  tasks: DialogData[]
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
        {
          name: "Maths",
          tasks: [
            {
              iss_date: new Date(2019, 13, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
          ]
        },
        {
          name: "Science",
          tasks: []
        }
      ]
    },
    {
      name: "10th",
      subjects: [
        {
          name: "Maths",
          tasks: [
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
          ]
        },

      ]
    },
    {
      name: "11th Commerce",
      subjects: [
        {
          name: "Statistics",
          tasks: []
        },
        {
          name: "Accountancy ",
          tasks: [
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
          ]
        },
        {
          name: "English",
          tasks: []
        }
      ]
    },
    {
      name: "11th Science",
      subjects: [
        {
          name: "English",
          tasks: []
        }
      ]
    },
    {
      name: "12th Commerce",
      subjects: [
        {
          name: "Statistics",
          tasks: []
        },
        {
          name: "Accountancy ",
          tasks: [
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(4)",
              description: "Sample description of task and work(5)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(6)",
              description: "Sample description of task and work(6)"
            },
          ]
        },
        {
          name: "English",
          tasks: []
        }
      ]
    },
    {
      name: "12th Science",
      subjects: [
        {
          name: "English",
          tasks: []
        }
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

  }

  ngOnInit() {
    // select first class from class list by default
    this.selectedClass = this.classNames[0]
  }

  tabClick(tab: MatTabChangeEvent) {
    // console.log(tab)
  }

}


// Add task and work form dialog box
@Component({
  selector: 'dialog-task-work',
  templateUrl: 'add-task-work.form.html',
  styleUrls: ['add-task-work.form.css']
})
export class TaskWorkFormDialog implements OnInit, OnDestroy{
  addTaskForm: FormGroup;
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<TaskWorkFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onSave(): void {
    // this.dialogRef.close();
    if (this.addTaskForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      class: new FormControl(null, {
        validators: [Validators.required]
      }),
      subject: new FormControl(null, {
        validators: [Validators.required]
      }),
      issueDate: new FormControl(null, {
        validators: [Validators.required]
      }),
      submissionDate: new FormControl(null, {
        validators: [Validators.required]
      }),
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
    });

  }
  ngOnDestroy() { }

}