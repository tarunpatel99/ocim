import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidation } from '../../../password-validator';

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

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.css']
})
export class FacultyProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  addFacultyForm: FormGroup;
  confirmPass: FormGroup;
  confirmPasswordError = '';
  password = '';

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

  ngOnInit() {
    this.addFacultyForm = new FormGroup({
      firstname: new FormControl(null, {
        validators: [Validators.required]
      }),
      // middlename: new FormControl(null, {
      //   validators: [Validators.required]
      // }),
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

  getPassword(passwordValue: string) {
    this.password = passwordValue
  }

  checkPassword(confirmPasswordValue: string) {
    if (this.confirmPasswordError != this.password) {
      this.confirmPasswordError = 'password is not matched'
      console.log(confirmPasswordValue)
    }
  }

  
}