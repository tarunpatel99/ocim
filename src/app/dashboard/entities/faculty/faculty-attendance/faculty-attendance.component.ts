import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-faculty-attendance',
  templateUrl: './faculty-attendance.component.html',
  styleUrls: ['./faculty-attendance.component.css']
})
export class FacultyAttendanceComponent implements OnInit {
  facultyname="Tarun Patel"
  constructor() { }

  date = new FormControl(new Date());

  ngOnInit() {
  }

}
