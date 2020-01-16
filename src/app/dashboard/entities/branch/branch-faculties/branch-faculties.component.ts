import { Component, OnInit ,ViewChild} from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup, Validators } from '@angular/forms';



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
  {position: 1, name: 'Bhavesh Rathod', email: 'bhaveshrathod@gmail.com', phone: '9876543210'},
  {position: 2, name: 'Rutvik Rathod', email: 'rutvikrathod@gmail.com', phone: '9876343210'},
  {position: 3, name: 'Deven Purohit', email: 'devenpurohit@gmail.com', phone: '9834543210'},
  {position: 4, name: 'Ajit Bhavsar', email: 'ajitbhavsar@gmail.com', phone: '9876123210'},
  {position: 5, name: 'Otya sir', email: 'otya@gmail.com', phone: '9876345610'},
  {position: 6, name: 'Jayesh Patel', email: 'jayeshpatel@gmail.com', phone: '9871223210'},
  {position: 7, name: 'Jigar Patel', email: 'jigarpatel@gmail.com', phone: '987123440'},
  {position: 8, name: 'Kalpesh Patel', email: 'kalpeshpatel@gmail.com', phone: '9872343210'},
  {position: 9, name: 'Harshil Patel', email: 'harshilpatel@gmail.com', phone: '9823433210'},
  {position: 10, name: 'Aakash Chaturvedi', email: 'aakashchaturvedi@gmail.com', phone: '9876678210'},
];



@Component({
  selector: 'app-branch-faculties',
  templateUrl: './branch-faculties.component.html',
  styleUrls: ['./branch-faculties.component.css']
})
export class BranchFacultiesComponent implements OnInit {

  constructor() { }

  checked = false;


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
  dataSource = new MatTableDataSource<Fac_element>(Faculty_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  addFacultybyemailForm: FormGroup;
  addFacultyForm: FormGroup;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;


  this.addFacultybyemailForm = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required]
    }),
  });

  this.addFacultyForm = new FormGroup({
    firstname: new FormControl(null, {
      validators: [Validators.required]
    }),
    middlename: new FormControl(null, {
      validators: [Validators.required]
    }),
    lastname: new FormControl(null, {
      validators: [Validators.required]
    }),
    class: new FormControl(null, {
      validators: [Validators.required]
    }),
    subject: new FormControl(null, {
      validators: [Validators.required]
    }),
    dateofbirth: new FormControl(null, {
      validators: [Validators.required]
    }),
    joiningdate: new FormControl(null, {
      validators: [Validators.required]
    }),
    experienceyear: new FormControl(null, {
      validators: [Validators.required]
    }),
    gender: new FormControl(null, {
      validators: [Validators.required]
    }),
    address: new FormControl(null, {
      validators: [Validators.required]
    }),
    city: new FormControl(null, {
      validators: [Validators.required]
    }),
    state: new FormControl(null, {
      validators: [Validators.required]
    }),
    postalcode: new FormControl(null, {
      validators: [Validators.required]
    }),
    phonenumber: new FormControl(null, {
      validators: [Validators.required]
    }),
    email: new FormControl(null, {
      validators: [Validators.required]
    }),
    password: new FormControl(null, {
      validators: [Validators.required]
    }),
    confirmpassword: new FormControl(null, {
      validators: [Validators.required]
    }),
  })

  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 


}
