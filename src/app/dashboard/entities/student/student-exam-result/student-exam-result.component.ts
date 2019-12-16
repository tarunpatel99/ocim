import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  sub: string;
  marks: number;
  tmarks: number;
  examdate: string;
  desc: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {sub: 'Maths', marks: 45, tmarks: 50, examdate: '5/12/2019', desc: 'Chapter 1' },
  {sub: 'English', marks: 35, tmarks: 50, examdate: '11/11/2019', desc: 'Chapter 2, 3 and 4' },
  {sub: 'Science', marks: 40, tmarks: 50, examdate: '15/10/2019', desc: 'Chapter 3 and 4' },
  ];
@Component({
  selector: 'app-student-exam-result',
  templateUrl: './student-exam-result.component.html',
  styleUrls: ['./student-exam-result.component.css']
})
export class StudentExamResultComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['sub', 'marks', 'tmarks', 'examdate', 'desc'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}
