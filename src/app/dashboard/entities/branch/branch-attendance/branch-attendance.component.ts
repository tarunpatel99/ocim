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

export interface Std_element {
  rollno: string;
  name: string;
  Maths: string;
  Sci: string;
  English: string;
  SS: string;
  Total:string;
}

const Student_Data: Std_element[] = [
  {rollno: '19-9th-11', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-12', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-13', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-14', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-15', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-16', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-17', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-18', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-19', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
  {rollno: '19-9th-20', name: 'Student Middlename Surname', Maths: "48/50" , Sci: "47/50" , English: "46/50" , SS: "50/50" , Total: "191/200"},
];

@Component({
  selector: 'app-branch-attendance',
  templateUrl: './branch-attendance.component.html',
  styleUrls: ['./branch-attendance.component.css']
})
export class BranchAttendanceComponent implements OnInit {

  constructor() { }

  classes: Class[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
    {value: '11-sci-maths', viewValue: '11 Sci Maths'},
    {value: '11-sci-bio', viewValue: '11 Sci Bio'},
    {value: '12-sci-maths', viewValue: '12 Sci Maths'},
    {value: '12-sci-bio', viewValue: '12 Sci Bio'},
    {value: '11-commerce', viewValue: '11 Commerce'},
    {value: '12-commerce', viewValue: '12 Commerce'},
    {value: '11-arts', viewValue: '11 Arts'},
    {value: '12-arts', viewValue: '12 Arts'},
    {value: 'other', viewValue: 'Custom'},
  ];

  
  displayedColumns: string[] = ['rollno','name', 'Maths','Sci','English','SS','Total','action'];
  dataSource = new MatTableDataSource<Std_element>(Student_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

}
