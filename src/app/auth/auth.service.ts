import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role = ""
  username = ""
  
  constructor(
    private router: Router,
    private StudentService: StudentService
  ) { }
  checkUser(user: import("./login/login.component").signIn) {
    this.router.navigate([''])
    this.role = user.role
    this.username = user.username
    
  }
  
  navigateUser() { 
    const currentNav = this.router.url;

    // check if role is assigned or not
    if (this.role == "") {
      this.router.navigate(['/login'])
    }

    // navigate according user role
    if (currentNav == "/") {
      if (this.role == 'Admin') {
        this.router.navigate(['admin-dashboard'])
      }
      if (this.role == 'Owner') {
        this.router.navigate(['institute-dashboard'])
      }
      if (this.role == 'Branch Manager') {
        this.router.navigate(['branch-dashboard'])
      }
      if (this.role == 'Faculty') {
        this.router.navigate(['faculty-dashboard'])
      }
      if (this.role == 'Student') {
        this.router.navigate(['student-dashboard'])
      }
    }
  }
}
