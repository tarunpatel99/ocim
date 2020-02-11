import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
declare let jsPDF: new () => any;

export interface StudentFees {
  std: number;
  sem: number;
  mode: string; 
  date: string;
  amount: number;
  status: string;
}
var columns = ["ID", "Name", "Country"];
var rows = [
    [1, "Shaw", "Tanzania"],
    [2, "Nelson", "Kazakhstan"],
    [3, "Garcia", "Madagascar"],
];
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

  onPrint() {
    let doc = new jsPDF();
        doc.autoTable(columns, rows);
        doc.save("table.pdf");
  }

  getColor(status) {
    switch (status) {
      case 'Pending':
        return '#212121'; // grey
      case 'Paid':
        return '#43a047'; // green
      case 'Unpaid':
        return '#C62828'; // red
    }
  }
}
