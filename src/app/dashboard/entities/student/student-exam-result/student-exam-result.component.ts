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
}

const students: StudentData[] = [
  { exmdate: '14/11/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'Python', obt_marks: 44, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'VB', obt_marks: 35, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'DCN', obt_marks: 49, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'Python', obt_marks: 44, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'VB', obt_marks: 35, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 17, ttl_marks: 50 },
  { exmdate: '14/12/2019' , subject: 'DCN', obt_marks: 49, ttl_marks: 50 }
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
   classsbjs: Classsbj[] = [
    {value: '8-a-div', viewValue: '8 (A Div)'},
    {value: '8-b-div', viewValue: '8 (B Div)'},
    {value: '9-a-div', viewValue: '9 (A Div)'},
    {value: '9-b-div', viewValue: '9 (B Div)'},
    {value: '10-a-div', viewValue: '10 (A Div)'},
    {value: '10-b-div', viewValue: '10 (B Div)'},
    {value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)'},
    {value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)'},
    {value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)'},
    {value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)'},
    {value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)'},
    {value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)'},
    {value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)'},
    {value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)'}
  ];

  subjects: Subjectexm[] = [
    {value: 'Science', viewValue: 'Science'},
    {value: 'Maths', viewValue: 'Maths'},
    {value: 'Social', viewValue: 'Social'},
    {value: 'English', viewValue: 'English'}
  ]
  
  exmmarks: exmmark[] = [
    {value: '19-9th-001', name: 'Harshil Sureja'},
    {value: '19-9th-002', name: 'Tarun Patel'},
    {value: '19-9th-003', name: 'Harshil Patel'},
    {value: '19-9th-004', name: 'Mihir Kamariya'},
    {value: '19-9th-005', name: 'Shubh Bhatt'},
    {value: '19-9th-006', name: 'Nirav Rajput'},
    {value: '19-9th-007', name: 'Aakash Bhavsar'},
    {value: '19-9th-008', name: 'Hastik Bhut'},
    {value: '19-9th-009', name: 'Yash Charola'},
    {value: '19-9th-010', name: 'Bhautik Patel'},
    {value: '19-9th-012', name: 'Anuj Shyara'},
    {value: '19-9th-013', name: 'Parth Patel'},
    {value: '19-9th-014', name: 'Anonymous Patel'},
    {value: '19-9th-015', name: 'Anonymous Patel'},
    {value: '19-9th-016', name: 'Anonymous Patel'},
    {value: '19-9th-017', name: 'Anonymous Patel'},
    {value: '19-9th-018', name: 'Anonymous Patel'},
    {value: '19-9th-019', name: 'Anonymous Patel'},
    {value: '19-9th-020', name: 'Anonymous Patel'},
  ]


  displayedColumns: string[] = ['exmdate' , 'subject', 'obt_marks', 'ttl_marks' , 'action'];
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
