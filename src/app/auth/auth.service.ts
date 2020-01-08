import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

export class User {
  username?: string;
  password?: string;
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser: User;

  constructor(
    private router: Router,
    private StudentService: StudentService
  ) { }

  login(user: import("./login/login.component").signIn, currentUrl) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    if (user) {
      this.router.navigate([currentUrl]);
    }
    
  }

  navigateUser() {
    const currentNav = this.router.url;
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));

    // check if role is assigned or not
    if (this.currentuser.role == "") {
      this.router.navigate(['/login'])
    }

    // navigate according user role
    if (currentNav == "/") {
      if (this.currentuser.role == 'Admin') {
        this.router.navigate(['admin-dashboard'])
      }
      if (this.currentuser.role == 'Owner') {
        this.router.navigate(['institute-dashboard'])
      }
      if (this.currentuser.role == 'Branch Manager') {
        this.router.navigate(['branch-dashboard'])
      }
      if (this.currentuser.role == 'Faculty') {
        this.router.navigate(['faculty-dashboard'])
      }
      if (this.currentuser.role == 'Student') {
        this.router.navigate(['student-dashboard'])
      }
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
