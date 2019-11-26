import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from "./student.service";
import { Subscription } from 'rxjs';

export interface StudentModel {
  id: string;
  name: string;
  class: string;
  city: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'ocim';
  displayedColumns = ['id', 'name', 'class', 'city'];
  datasource: any
  private studentSub: Subscription;

  constructor(private StudentService: StudentService) {
    
  }

  ngOnInit() {
    // this.StudentService.getStudents();
    // // this.datasource = this.StudentService.StudentDataTable;
    // this.studentSub = this.StudentService.getStudentsUpdateListener()
    // .subscribe((students: StudentModel[]) => {
    //   this.datasource = students
    // })
    // console.log(this.datasource)
  }

}

