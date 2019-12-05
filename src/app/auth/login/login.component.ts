import { Component, OnInit } from '@angular/core';

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
    {value: '0', viewValue: 'Admin'},
    {value: '1', viewValue: 'Owner'},
    {value: '2', viewValue: 'Branch Manager'},
    {value: '3', viewValue: 'Faculty'},
    {value: '4', viewValue: 'Student'}
  ];
  ngOnInit() {
  }

}
