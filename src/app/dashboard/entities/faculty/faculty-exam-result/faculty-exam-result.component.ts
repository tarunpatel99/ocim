import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

export interface StudentData {
  id: string;
  name: string;
  date: string,
  subject: string;
  obt_marks: number; // obtain marks from total marks
  ttl_marks: number; // totla marks
}

@Component({
  selector: 'app-faculty-exam-result',
  templateUrl: './faculty-exam-result.component.html',
  styleUrls: ['./faculty-exam-result.component.css']
})
export class FacultyExamResultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date','subject', 'obt_marks', 'ttl_marks'];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());
  constructor() {
    // get student info from local data
    const students = [
      { id: '19-9th-001', name: 'Harshil Patel', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
      { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
      { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
      { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
      { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Maths', obt_marks: 17, ttl_marks: 50 },
      { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
      { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
      { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
      { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
      { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 }
    ]

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(students);
  }

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
