import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

export interface Role {
  value: string;
  viewValue: string;
}

export interface signIn {
  username: string,
  password: string,
  role: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(private AuthService: AuthService, private router: Router, 
    private route: ActivatedRoute) { }
  roles: Role[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Owner', viewValue: 'Institute Owner'},
    {value: 'Branch Manager', viewValue: 'Branch Manager'},
    {value: 'Faculty', viewValue: 'Faculty'},
    {value: 'Student', viewValue: 'Student'}
  ];

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(user)
    if (user != null) {
      this.router.navigate(['/'])
    }
    
  }
  
  // get login info of user
  onLogin(form: NgForm) {
    const user: signIn = {
      username: form.value.username,
      password: form.value.password,
      role: form.value.role
    }

    // Authentication
    this.AuthService.login(user, this.returnUrl)
    
  }

}
