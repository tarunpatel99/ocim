import { Component, OnInit ,ViewChild} from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';


export interface Class {
  value: string;
  viewValue: string;
}

export interface Subjectexm {
  value: string;
  viewValue: string;
}

export interface Std_element {
  rollno: string;
  name: string;
  classnm: string; 
  Maths: string;
  Sci: string;
  English: string;
  SS: string;
  Total:string;
}

const Student_Data: Std_element[] = [
  {rollno: '19-9th-11', name: 'Harshil Sureja', classnm: '9 (A Div)' , Maths: "14/20" , Sci: "18/20" , English: "16/20" , SS: "20/20" , Total: "68/80"},
  {rollno: '19-9th-12', name: 'Tarun Patel', classnm: '9 (A Div)' , Maths: "14/20" , Sci: "17/20" , English: "15/20" , SS: "20/20" , Total: "66/80"},
  {rollno: '19-9th-13', name: 'Aakash Bhavsar', classnm: '9 (A Div)' , Maths: "18/20" , Sci: "16/20" , English: "16/20" , SS: "20/20" , Total: "72/80"},
  {rollno: '19-9th-14', name: 'Shubh bhutt', classnm: '9 (A Div)' , Maths: "17/20" , Sci: "17/20" , English: "13/20" , SS: "20/20" , Total: "67/80"},
  {rollno: '19-9th-15', name: 'Mihir Kamariya', classnm: '9 (A Div)' , Maths: "16/20" , Sci: "13/20" , English: "15/20" , SS: "20/20" , Total: "64/80"},
  // {rollno: '19-9th-16', name: 'Hastik Bhut', classnm: '9 (A Div)' , Maths: "49/20" , Sci: "47/20" , English: "46/20" , SS: "20/20" , Total: "189/80"},
  // {rollno: '19-9th-17', name: 'Yash Charola', classnm: '9 (A Div)' , Maths: "42/20" , Sci: "44/20" , English: "44/20" , SS: "20/20" , Total: "193/80"},
  // {rollno: '19-9th-18', name: 'Tanmay Patel', classnm: '9 (A Div)' , Maths: "41/20" , Sci: "47/20" , English: "46/20" , SS: "20/20" , Total: "194/80"},
  // {rollno: '19-9th-19', name: 'Shivam Patel', classnm: '9 (A Div)' , Maths: "40/20" , Sci: "44/20" , English: "41/20" , SS: "20/20" , Total: "196/80"},
  // {rollno: '19-9th-20', name: 'Bhautik Panchasara', classnm: '9 (A Div)' , Maths: "40/20" , Sci: "47/20" , English: "40/20" , SS: "20/20" , Total: "195/80"},
];

@Component({
  selector: 'app-branch-attendance',
  templateUrl: './branch-attendance.component.html',
  styleUrls: ['./branch-attendance.component.css']
})
export class BranchAttendanceComponent implements OnInit {

  constructor() { }

  classes: Class[] = [
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
    {value: 'Bio', viewValue: 'Bio'}
  ]

  demoprint() {
    window.print();
  }

  displayedColumns: string[] = ['rollno','name' , 'classnm' , 'Maths','Sci','English','SS','Total'];
  dataSource = new MatTableDataSource<Std_element>(Student_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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
