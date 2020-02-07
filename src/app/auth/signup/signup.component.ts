import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, MaxLengthValidator} from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  regformgroup: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pnum = new FormControl('', [
    Validators.required
  ]);
  pass = new FormControl('', [
    Validators.required
  ]);
  npass = new FormControl('', [
    Validators.required
  ]);
  contact: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.regformgroup = new FormGroup({
      fname: new FormControl(null, {
        validators: [Validators.required]
      }),
      lname: new FormControl(null, {
        validators: [Validators.required]
      }),
      address: new FormControl(null, {
        validators: [Validators.required]
      }),
      gender: new FormControl(null, {
        validators: [Validators.required]
      }),
    }),
    this.secondFormGroup = new FormGroup({
      iname: new FormControl(null, {
        validators: [Validators.required]
      }),
      state: new FormControl(null, {
        validators: [Validators.required]
      }),
      city: new FormControl(null, {
        validators: [Validators.required]
      }),
      pcode: new FormControl(null, {
        validators: [Validators.required]
      }),
      address: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.contact = new FormGroup({
      PhoneNumber:new FormControl('',[Validators.pattern(MOBILE_PATTERN)])
    });
  }
}
