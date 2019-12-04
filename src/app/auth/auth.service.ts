import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role = 'Owner'
  constructor(
    private router: Router,
    private StudentService: StudentService
  ) { }

  // checkRoutes() {
  //   const currentRoute = this.router.url
  //   if (currentRoute == '/') {
  //     if (this.StudentService.role == 'Admin') {
  //       this.router.navigate
  //     }
  //   }
  // }
}
