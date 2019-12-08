import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface Class {
  value: string;
  viewValue: string;
}

export interface Subject {
  value: string;
  viewValue: string;
}

export interface City {
  value: string;
  viewValue: string;
}

export interface State {
  value: string;
  viewValue: string;
}


export interface Fac_element {
  name: string;
  position: number;
  email: string;
  phone: string;


}

const Faculty_Data: Fac_element[] = [
  {position: 1, name: 'Faculty Middlename Surname', email: 'facultyemail1@gmail.com', phone: '9876543210'},
  {position: 2, name: 'Faculty Middlename Surname', email: 'facultyemail2@gmail.com', phone: '9876543210'},
  {position: 3, name: 'Faculty Middlename Surname', email: 'facultyemail3@gmail.com', phone: '9876543210'},
  {position: 4, name: 'Faculty Middlename Surname', email: 'facultyemail4@gmail.com', phone: '9876543210'},
  {position: 5, name: 'Faculty Middlename Surname', email: 'facultyemail5@gmail.com', phone: '9876543210'},
  {position: 6, name: 'Faculty Middlename Surname', email: 'facultyemail6@gmail.com', phone: '9876543210'},
  {position: 7, name: 'Faculty Middlename Surname', email: 'facultyemail7@gmail.com', phone: '9876543210'},
  {position: 8, name: 'Faculty Middlename Surname', email: 'facultyemail8@gmail.com', phone: '9876543210'},
  {position: 9, name: 'Faculty Middlename Surname', email: 'facultyemail9@gmail.com', phone: '9876543210'},
  {position: 10, name: 'Faculty Middlename Surname', email: 'facultyemail10@gmail.com', phone: '9876543210'},
];



@Component({
  selector: 'app-branch-faculties',
  templateUrl: './branch-faculties.component.html',
  styleUrls: ['./branch-faculties.component.css']
})
export class BranchFacultiesComponent implements OnInit {

  constructor() { }


  classes: Class[] = [
    {value: '11-sci-maths', viewValue: '11 Sci Maths'},
    {value: '11-sci-bio', viewValue: '11 Sci Bio'},
    {value: '12-sci-maths', viewValue: '12 Sci Maths'},
    {value: '12-sci-bio', viewValue: '12 Sci Bio'}
  ];

  subjects: Subject[] = [
    {value: 'maths', viewValue: 'Maths'},
    {value: 'bio', viewValue: 'Bio'},
    {value: 'physics', viewValue: 'Physics'},
    {value: 'chemistry', viewValue: 'Chemistry'},
    {value: 'english', viewValue: 'English'},
    {value: 'computer', viewValue: 'Computer'}
  ];

  cities: City[] = [
    {value: 'Ahmedabad', viewValue: 'Ahmedabad'},
    {value: 'Rajkot', viewValue: 'Rajkot'}
  ];

  states: State[] = [
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Maharastra', viewValue: 'Maharastra'}
  ];
  

  displayedColumns: string[] = ['name', 'email', 'phone','action'];
  dataSource = Faculty_Data;


  ngOnInit() {
  }

}
