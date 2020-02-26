import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../dashboard/entities/student/student.service';

export class User {
  email: string;
  password: string;
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser: User;

  users: User[] = [
    {
      email: 'admin@ocim.com',
      password: 'admin123',
      role: 'Admin'
    },
    {
      email: 'owner@ocim.com',
      password: 'owner123',
      role: 'Owner'
    },
    {
      email: 'bm@ocim.com',
      password: 'manager123',
      role: 'Branch Manager'
    },
    {
      email: 'faculty@ocim.com',
      password: 'faculty123',
      role: 'Faculty'
    },
    {
      email: 'student@ocim.com',
      password: 'student123',
      role: 'Student'
    }
  ]

  constructor(
    private router: Router,
    private StudentService: StudentService
  ) { }

  login(user: User, currentUrl) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    if (user) {
      this.router.navigate([currentUrl]);
    }

  }

  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    // get token from local storage or state management
    const user = JSON.parse(localStorage.getItem('currentUser'));

    // decode token to read the payload details
    const role = user.role

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!role) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(role['role']);
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
