import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface StudentFees {
  std: number;
  sem: number;
  mode: string; 
  date: string;
  amount: number;
  status: string;
}

const students: StudentFees[] = [
  { std: 8 , sem: 2, mode: 'Online', date: '29-12-2019', amount: 45000, status: "Unpaid"},
  { std: 8 , sem: 1, mode: 'Online', date: '29-12-2019', amount: 45000, status: "Paid"},
]
@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.css']
})
export class StudentFeesComponent implements OnInit {

  constructor() {
    this.dataSource = new MatTableDataSource(students);
   }
   displayedColumns: string[] = ['std' , 'sem', 'mode', 'date', 'amount', 'status', 'print'];
  dataSource: MatTableDataSource<StudentFees>;
  ngOnInit() {
  }

  getColor(status) {
    switch (status) {
      case 'Paid':
        return '#43a047'; // green
      case 'Unpaid':
        return '#e53935'; // red
    }
  }
}
