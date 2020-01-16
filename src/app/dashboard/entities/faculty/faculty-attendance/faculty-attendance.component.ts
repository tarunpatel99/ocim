import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Student {
  studentname: String
}

@Component({
  selector: 'app-faculty-attendance',
  templateUrl: './faculty-attendance.component.html',
  styleUrls: ['./faculty-attendance.component.css']
})
export class FacultyAttendanceComponent implements OnInit {
  facultyname="Tarun Patel"
  constructor() { }
  students: Student[] = [
    // { studentname: 'Harshil Sureja' },
    // { studentname: 'Nirav Kadiya' },
    // { studentname: 'Shubham mevada' },
    // { studentname: 'Shubha Bhatt' },
    // { studentname: 'Tarun Patel' },
    // { studentname: 'Jay Patel' },
    // { studentname: 'Shushang Agnihotri' },
    // { studentname: 'Saurabh Oza' },
    // { studentname: 'Shreya Patel' },
    // { studentname: 'Maitry Patel' },

  ]
  date = new FormControl(new Date());

  classControl = new FormControl('', [
    Validators.required
  ]);
  subjectControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }

}
