import { Component, OnInit } from '@angular/core';


export interface Class {
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
  rollno: string;
  name: string;
  class: string;
  phone: string;
}

const Faculty_Data: Fac_element[] = [
  {rollno: '19-bio-11', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-12', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-13', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-14', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-15', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-16', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-17', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-18', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-19', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-20', name: 'Student Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
];

@Component({
  selector: 'app-branch-students',
  templateUrl: './branch-students.component.html',
  styleUrls: ['./branch-students.component.css']
})
export class BranchStudentsComponent implements OnInit {

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

  cities: City[] = [
    {value: 'Ahmedabad', viewValue: 'Ahmedabad'},
    {value: 'Rajkot', viewValue: 'Rajkot'}
  ];

  states: State[] = [
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Maharastra', viewValue: 'Maharastra'}
  ];

  displayedColumns: string[] = ['rollno','name', 'class', 'phone','action'];
  dataSource = Faculty_Data;
 
  ngOnInit() {
  }

}
