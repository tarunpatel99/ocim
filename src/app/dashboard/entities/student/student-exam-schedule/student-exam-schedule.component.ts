import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface StudentData {
  description: string;
  exmdate: string;
  subject: string;
  start_time: string;
  ttl_marks: number; // totla marks
  passing_mark: number;
}

@Component({
  selector: 'app-student-exam-schedule',
  templateUrl: './student-exam-schedule.component.html',
  styleUrls: ['./student-exam-schedule.component.css']
})

export class StudentExamScheduleComponent implements OnInit {
  students: StudentData[] = [
    { description: 'Unit 1, 2' , exmdate: '14/12/2019', subject: 'Maths', start_time: '10:00 AM - 11:30 AM',ttl_marks: 50, passing_mark: 17 },
    { description: 'Unit 1' , exmdate: '15/12/2019', subject: 'Science', start_time: '10:00 AM - 11:30 AM', ttl_marks: 50, passing_mark: 17 },
    { description: 'Unit 1, 2, 3' , exmdate: '16/12/2019', subject: 'English',start_time: '12:00 PM - 01:30 PM', ttl_marks: 50, passing_mark: 17 },
    { description: 'Unit 1, 2' , exmdate: '17/12/2019', subject: 'SST',start_time: '12:00 PM - 01:30 PM', ttl_marks: 50, passing_mark: 17 },
  ]

  constructor() {
    this.dataSource = new MatTableDataSource(this.students);
  }

  displayedColumns: string[] = ['exmdate', 'subject','start_time', 'description','ttl_marks' , 'passing_mark'];
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
