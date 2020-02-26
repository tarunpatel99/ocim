import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { StudentService } from "./dashboard/entities/student/student.service";
import { Subscription } from 'rxjs';
import { StudentModel } from "./dashboard/entities/student/student.model";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ocim';
  role="admin";
  students = []
  displayedColumns = ['id', 'name', 'class', 'city', 'action'];
  datasource: StudentModel[] = []
  private studentSub: Subscription;

  constructor(private StudentService: StudentService) { }

  ngOnInit() {
    this.StudentService.getStudents();
    this.studentSub = this.StudentService.getStudentsUpdateListener()
    .subscribe((students: StudentModel[]) => {
      this.datasource = students
    })
  }

  ngOnDestroy() {
    this.studentSub.unsubscribe();
  }
}

