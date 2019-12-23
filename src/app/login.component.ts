import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export interface Role {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  roles: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'owner', viewValue: 'Owner'},
    {value: 'bm', viewValue: 'Branch Manager'},
    {value: 'student', viewValue: 'Student'},
    {value: 'faculty', viewValue: 'Faculty'}
  ];

  ngOnInit() {
  }

}
