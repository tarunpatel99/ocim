import { Component, OnInit ,ViewChild} from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material';

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

export interface Pincode {
  value: string;
  viewValue: string;
}


export interface Std_element {
  rollno: string;
  name: string;
  class: string;
  phone: string;
}

const Student_Data: Std_element[] = [
  {rollno: '19-bio-11', name: 'Harshil Sureja', class: '11 Sci Bio' , phone: '9834553210'},
  {rollno: '19-bio-12', name: 'Tarun Patel', class: '11 Sci Bio' , phone: '9873452210'},
  {rollno: '19-bio-13', name: 'Harshil Patel', class: '11 Sci Bio' , phone: '9234333210'},
  {rollno: '19-bio-14', name: 'Mihir Kamariya', class: '11 Sci Bio' , phone: '9834453210'},
  {rollno: '19-bio-15', name: 'Shubh Bhatt', class: '11 Sci Bio' , phone: '98754673210'},
  {rollno: '18-bio-16', name: 'Nirav Rajput', class: '12 Sci Bio' , phone: '987667610'},
  {rollno: '18-bio-17', name: 'Aakash Bhavsar', class: '12 Sci Bio' , phone: '987897810'},
  {rollno: '18-bio-18', name: 'Hastik Bhut', class: '12 Sci Bio' , phone: '9876232310'},
  {rollno: '18-bio-19', name: 'Yash Charola', class: '12 Sci Bio' , phone: '9876232410'},
  {rollno: '18-bio-20', name: 'Bhautik Patel', class: '12 Sci Bio' , phone: '9872374210'},
];



@Component({
  selector: 'app-branch-students',
  templateUrl: './branch-students.component.html',
  styleUrls: ['./branch-students.component.css']
})
export class BranchStudentsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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

  pincodes: Pincode[] = [
    {value: '380058', viewValue: '380058'},
    {value: '380035', viewValue: '380035'},
    {value: '380009', viewValue: '380009'},
    {value: '380015', viewValue: '380015'}
  ]
  
  displayedColumns: string[] = ['rollno','name', 'class', 'phone','action'];
  dataSource = new MatTableDataSource<Std_element>(Student_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  addStudentForm: FormGroup;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;


    this.addStudentForm = new FormGroup({
      firstname: new FormControl(null, {
        validators: [Validators.required]
      }),
      middlename: new FormControl(null, {
        validators: [Validators.required]
      }),
      lastname: new FormControl(null, {
        validators: [Validators.required]
      }),
      dateofbirth: new FormControl(null, {
        validators: [Validators.required]
      }),
      gender: new FormControl(null, {
        validators: [Validators.required]
      }),
      class: new FormControl(null, {
        validators: [Validators.required]
      }),
      rollno: new FormControl(null, {
        validators: [Validators.required]
      }),
      joiningdate: new FormControl(null, {
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

  onDeleteStudent(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: 'auto',
      data: {}
    });
  }

}
