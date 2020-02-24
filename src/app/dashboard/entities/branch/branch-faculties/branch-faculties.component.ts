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


export interface Pincode {
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
    { value: '8-a-div', viewValue: '8 (A Div)' },
    { value: '8-b-div', viewValue: '8 (B Div)' },
    { value: '9-a-div', viewValue: '9 (A Div)' },
    { value: '9-b-div', viewValue: '9 (B Div)' },
    { value: '10-a-div', viewValue: '10 (A Div)' },
    { value: '10-b-div', viewValue: '10 (B Div)' },
    { value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)' },
    { value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)' },
    { value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)' },
    { value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)' },
    { value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)' },
    { value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)' },
    { value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)' },
    { value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)' }
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
  
  pincodes: Pincode[] = [
    {value: '380058', viewValue: '380058'},
    {value: '380035', viewValue: '380035'},
    {value: '380009', viewValue: '380009'},
    {value: '380015', viewValue: '380015'}
  ]

  displayedColumns: string[] = ['name', 'email', 'phone','action'];
  dataSource = new MatTableDataSource<Fac_element>(Faculty_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  addFacultybyemailForm: FormGroup;
  addFacultyForm: FormGroup;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;


  this.addFacultybyemailForm = new FormGroup({
    byemail: new FormControl(null, {
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
