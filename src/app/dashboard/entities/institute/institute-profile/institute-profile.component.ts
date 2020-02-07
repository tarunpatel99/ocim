import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, MaxLengthValidator, FormControl} from '@angular/forms';

@Component({
  selector: 'app-institute-profile',
  templateUrl: './institute-profile.component.html',
  styleUrls: ['./institute-profile.component.css']
})
export class InstituteProfileComponent implements OnInit {
  firstFormGroup: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pnum = new FormControl('', [
    Validators.required,
  ]);
  pass = new FormControl('', [
    Validators.required
  ]);
  inum = new FormControl('', [
    Validators.required,
  ]);
  npass = new FormControl('', [
    Validators.required
  ]);
  opass = new FormControl('', [
    Validators.required
  ]);
  constructor() { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      fname: new FormControl(null, {
        validators: [Validators.required]
      }),
      lname: new FormControl(null, {
        validators: [Validators.required]
      }),
      address: new FormControl(null, {
        validators: [Validators.required]
      }),
      iname: new FormControl(null, {
        validators: [Validators.required]
      }),
      iaddress: new FormControl(null, {
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
      gender: new FormControl(null, {
        validators: [Validators.required]
      }),
      });

  }

}
