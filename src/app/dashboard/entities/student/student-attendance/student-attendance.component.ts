import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}
export interface PeriodicElement {
  subject: string;
  total: number;
  present: number;
  absent: number;
  per: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {subject: 'Maths', total: 3, present: 3, absent: 0, per: '100%'},
  {subject: 'Science', total: 5, present: 4, absent: 1, per: '80%'},
  {subject: 'English', total: 3, present: 2, absent: 1, per: '67%'},
  {subject: 'SST', total: 4, present: 3, absent: 1, per: '75%'},
  {subject: 'Total', total: 15, present: 12, absent: 3, per: '80%'}
];
@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {
  progress = "80%"
  constructor() { }
  displayedColumns: string[] = ['subject', 'total', 'present', 'absent', 'per'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }
  availableColors: ChipColor[] = [
    {name: 'Primary', color: 'primary'},
  ];
  attendance(per) {
    switch (per) {
      case '100%':
        return '#4CAF50';
      case '67%':
        return '#F44336';
      case '80%':
        return '#FFA726';
      case '75%':
        return '#FFA726';
    }
  }
}
