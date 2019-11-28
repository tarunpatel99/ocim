import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from '@angular/compiler';
import { Subject } from 'rxjs';

export interface StudentModel {
  id: string;
  name: string;
  class: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  StudentDataTable: StudentModel[] = []
  private StudentUpdated = new Subject<StudentModel[]>();
  // role="Admin"
  // role="Owner"
  // role="Branch Manager"
  // role="Faculty"
  role="Owner"
  constructor(private http: HttpClient) { }

  getStudents() {
    // this.http.get<{message: string, students: StudentModel[]}>('http://localhost:3000/students')
    //   .subscribe((studentData) => {
    //     this.StudentDataTable = studentData.students
    //     this.StudentUpdated.next([...this.StudentDataTable]);
        
    //   });
    //   console.log(this.StudentDataTable)
    // console.log("services are working");
  }

  getStudentsUpdateListener() {
    return this.StudentUpdated.asObservable();
  }
}
