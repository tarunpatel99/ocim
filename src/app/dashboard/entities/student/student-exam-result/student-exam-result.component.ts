import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

export interface StudentData {
  exmdate: string;
  subject: string;
  obt_marks: number; // obtain marks from total marks
  ttl_marks: number; // totla marks
  per: string;
}

const students: StudentData[] = [
  { exmdate: '14/11/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50, per: "90%"},
  { exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50, per: "90%" },
  { exmdate: '14/12/2019' , subject: 'Python', obt_marks: 44, ttl_marks: 50, per: "88%" },
  { exmdate: '14/12/2019' , subject: 'VB', obt_marks: 35, ttl_marks: 50, per: "70%" },
  { exmdate: '14/12/2019' , subject: 'DCN', obt_marks: 49, ttl_marks: 50, per: "98%" }
]


export interface Classsbj {
  value: string;
  viewValue: string;
}

export interface Subjectexm {
  value: string;
  viewValue: string;
}

export interface exmmark{
  value: string;
  name: string;

}

@Component({
  selector: 'app-student-exam-result',
  templateUrl: './student-exam-result.component.html',
  styleUrls: ['./student-exam-result.component.css']
})
export class StudentExamResultComponent implements OnInit {

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(students);
   }
  tobt="218"
  tmarks="250"
  tper="87%"
  displayedColumns: string[] = ['exmdate' , 'subject', 'obt_marks', 'ttl_marks', 'per'];
  dataSource: MatTableDataSource<StudentData>;



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
