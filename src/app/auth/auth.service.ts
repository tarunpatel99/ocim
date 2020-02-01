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
      // let matchedUsers = this.users.filter(fetchuser => { return fetchuser.username == user.username });
      // let checkuser = matchedUsers.length ? matchedUsers[0] : null;
      // let checkpassword = null, checkrole = null
      // console.log(checkuser)
      // if (checkuser != null) {
      //   if (user.password == checkuser.password)
      //     checkpassword = checkuser
      // }
      // if (checkpassword != null) {
      //   if (user.role == checkpassword.role)
      //     checkrole = checkpassword
      // }
      // console.log(checkrole, checkuser, checkpassword)
      // if (checkuser == null) {
      //   return
      // }
      // else if (checkpassword == null) {
      //   return
      // }
      // else if (checkrole == null) {
      //   return
      // }
      // else if (checkuser != null && checkpassword != null && checkrole != null) {
      //   console.log(checkrole, checkuser, checkpassword)
      //   this.router.navigate([currentUrl]);
      // }
      
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
