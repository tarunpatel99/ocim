import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // role = 'Admin'
  // role = 'Owner'
  // role = 'Branch Manager'
  // role = 'Faculty'
  // role = 'Student'
  role = ""
  
  constructor(
    private router: Router,
    private StudentService: StudentService
  ) { }
  checkUser(user: import("./login/login.component").signIn) {
    this.router.navigate([''])
    this.role = user.role
    
  }
  
  navigateUser() {
    
    const currentNav = this.router.url;
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
  // checkRoutes() {
  //   const currentRoute = this.router.url
  //   if (currentRoute == '/') {
  //     if (this.StudentService.role == 'Admin') {
  //       this.router.navigate
  //     }
  //   }
  // }
}
