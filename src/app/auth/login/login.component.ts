import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { element } from 'protractor';

export interface Role {
  value: string;
  viewValue: string;
}

export interface signIn {
  email: string;
  password: string;
  role: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  user = false;
  password = false;
  role = false

  loginForm: FormGroup
  

  constructor(private AuthService: AuthService,
    private router: Router, 
    private route: ActivatedRoute,
    overlayContainer: OverlayContainer) {
      overlayContainer.getContainerElement().classList.add('owner-theme');
    }
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

    // form validation
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      role: new FormControl('', {
        validators: [Validators.required]
      })
    });
    
  }
  
  // get login info of user
  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    const user: signIn = {
      email: form.value.email,
      password: form.value.password,
      role: form.value.role
    }


    // Authentication
    this.AuthService.login(user, this.returnUrl)
    
  }

}
