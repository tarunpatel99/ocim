import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { MatTabChangeEvent } from '@angular/material';
import { TaskWorkData, subjectData, classData, Student } from "../faculty.model";
import { FacultyService } from '../faculty-services/faculty.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faculty-task-work',
  templateUrl: './faculty-task-work.component.html',
  styleUrls: ['./faculty-task-work.component.css']
})
export class FacultyTaskWorkComponent implements OnInit, OnDestroy {

  tasks: classData[] = []
  selectedClass = { subjects: [] } as classData;
  selectedSubject = { tasks: [] } as subjectData;
  selectedtask = {} as TaskWorkData;
  submitTaskForm: FormGroup;
  taskSubs: Subscription;
  constructor(public dialog: MatDialog, private FacultyService: FacultyService) { }

  ngOnInit() {
    // select first class from class list by default
    this.tasks = this.FacultyService.getTask()
    this.taskSubs = this.FacultyService.getTaskUpdateListener().subscribe((tasks: classData[]) => {
      this.tasks = tasks
    })
    this.selectedClass = this.tasks[0]
  }

  classControl = new FormControl('', [
    Validators.required
  ]);
  subjectControl = new FormControl('', [
    Validators.required
  ]);
  taskControl = new FormControl('', [
    Validators.required
  ]);
  
  date = new FormControl(new Date());
  students: Student[] = [
    { studentname: 'Harshil Sureja' },
    { studentname: 'Nirav Kadiya' },
    { studentname: 'Shubham mevada' },
    { studentname: 'Shubha Bhatt' },
    { studentname: 'Tarun Patel' },
    { studentname: 'Jay Patel' },
    { studentname: 'Shushang Agnihotri' },
    { studentname: 'Saurabh Oza' },
    { studentname: 'Shreya Patel' },
    { studentname: 'Maitry Patel' },
  ]

  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(TaskWorkFormDialog, {
      width: '500px',
      height: 'fit-content',
      panelClass: 'custom-dialog'
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  setClass(className) {
    this.selectedClass = className
  }

  setSubject(subjectName) {
    this.selectedSubject = subjectName
  }

  setTask(task) {
    this.selectedtask = task
  }

  // get selected class and display its subjects
  chooseClass(event, newClass) {
    this.selectedClass = newClass;

  }

  tabClick(tab: MatTabChangeEvent) {
    // console.log(tab)
  }

  ngOnDestroy() {
    this.taskSubs.unsubscribe()
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
  submitTaskForm: FormControl;
  id: string;
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<TaskWorkFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TaskWorkData,
    private FacultyService: FacultyService) { }

  onSave(): void {
    
    // this.dialogRef.close();
    if (this.addTaskForm.invalid) {
      return;
    }
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    const task: classData = {
      id: this.id,
      name: '10th',
      subjects: [
        {
          name: 'New task for 10th standard.',
          tasks: [
            {
              iss_date: new Date(2019, 13, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Unit 2, Exersice 12",
              description: "Do whole exersice accept que 2."
            }
          ]
        }
      ]
    }
    this.FacultyService.addTask(task)
  }

  resetForm() {
    this.addTaskForm.reset()
    this.dialogRef.close()
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