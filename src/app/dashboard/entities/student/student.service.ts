import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from '@angular/compiler';
import { Subject } from 'rxjs';
import { StudentModel } from "./student.model";
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  students: StudentModel[] = []
  private StudentUpdated = new Subject<StudentModel[]>();
  studentGetDataUrl = 'http://localhost:3000/students'
  constructor(private http: HttpClient) { }

  getStudents() {
    this.http.get<{message: string, students: StudentModel[]}>(this.studentGetDataUrl)
      .subscribe((studentData) => {
        this.students = studentData.students;
        this.StudentUpdated.next([...this.students]);
      });
  }

  getStudentsUpdateListener() {
    return this.StudentUpdated.asObservable();
  }
   
}
