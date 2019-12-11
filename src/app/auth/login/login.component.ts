import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface Role {
  value: string;
  viewValue: string;
}

export interface signIn {
  email: string,
  password: string,
  role: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }
  roles: Role[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Owner', viewValue: 'Owner'},
    {value: 'Branch Manager', viewValue: 'Branch Manager'},
    {value: 'Faculty', viewValue: 'Faculty'},
    {value: 'Student', viewValue: 'Student'}
  ];
  tempRol;
  selectedRole(getRol: any) {
    this.tempRol = getRol
  };

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    const user: signIn = {
      email: form.value.email,
      password: form.value.password,
      role: this.tempRol
    }

    console.log(this.tempRol)
    this.AuthService.checkUser(user)
  }

}
