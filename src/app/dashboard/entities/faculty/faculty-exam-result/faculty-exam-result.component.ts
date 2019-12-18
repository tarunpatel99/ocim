import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

export interface StudentData {
  id: string;
  name: string;
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
  displayedColumns: string[] = ['id', 'name', 'subject', 'obt_marks', 'ttl_marks'];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());
  constructor() {
    // get student info from local data
    const students = [
      { id: '17-BCA-068', name: 'Harshil Sureja', subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
      { id: '17-BCA-078', name: 'Nirav Kadiya', subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
      { id: '17-BCA-081', name: 'Shubham Mevada', subject: 'Python', obt_marks: 44, ttl_marks: 50 },
      { id: '17-BCA-105', name: 'Shubha Bhatt', subject: 'VB', obt_marks: 35, ttl_marks: 50 },
      { id: '17-BCA-126', name: 'Tarun Patel', subject: 'OSOS', obt_marks: 17, ttl_marks: 50 },
      { id: '17-BCA-140', name: 'Aakash Bhavasar', subject: 'DCN', obt_marks: 49, ttl_marks: 50 },
      { id: '17-BCA-068', name: 'Harshil Sureja', subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
      { id: '17-BCA-078', name: 'Nirav Kadiya', subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
      { id: '17-BCA-081', name: 'Shubham Mevada', subject: 'Python', obt_marks: 44, ttl_marks: 50 },
      { id: '17-BCA-105', name: 'Shubha Bhatt', subject: 'VB', obt_marks: 35, ttl_marks: 50 },
      { id: '17-BCA-126', name: 'Tarun Patel', subject: 'OSOS', obt_marks: 17, ttl_marks: 50 },
      { id: '17-BCA-140', name: 'Aakash Bhavasar', subject: 'DCN', obt_marks: 49, ttl_marks: 50 }
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
