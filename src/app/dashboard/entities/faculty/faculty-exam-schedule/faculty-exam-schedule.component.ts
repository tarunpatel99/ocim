import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface StudentData {
  title: string;
  description: string;
  exmdate: string;
  class: string;
  subject: string;
  ttl_marks: number; // totla marks
  passing_mark: number;
}

@Component({
  selector: 'app-faculty-exam-schedule',
  templateUrl: './faculty-exam-schedule.component.html',
  styleUrls: ['./faculty-exam-schedule.component.css']
})
export class FacultyExamScheduleComponent implements OnInit {

  students: StudentData[] = [
    { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 1' , description: 'Unit 1' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 1' , description: 'Unit 1' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Chemistry', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 1' , description: 'Unit 1' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Chemistry', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
    { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 }
  ]

  constructor() {
    this.dataSource = new MatTableDataSource(this.students);
  }

  displayedColumns: string[] = ['title', 'description', 'exmdate' , 'class' , 'subject', 'ttl_marks' , 'passing_mark'];
  dataSource: MatTableDataSource<StudentData>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // filtering data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
