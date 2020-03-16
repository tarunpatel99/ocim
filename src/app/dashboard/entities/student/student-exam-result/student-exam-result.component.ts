import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { PrintService } from 'src/app/dashboard/printservice/print.service';

export interface StudentData {
  exmdate: string;
  subject: string;
  obt_marks: number; // obtain marks from total marks
  ttl_marks: number; // totla marks
  per: number}

export interface Classsbj {
  value: string;
  viewValue: string;
}

export interface Subjectexm {
  value: string;
  viewValue: string;
}

export interface exmmark{
  value: string;
  name: string;

}

@Component({
  selector: 'app-student-exam-result',
  templateUrl: './student-exam-result.component.html',
  styleUrls: ['./student-exam-result.component.css']
})
export class StudentExamResultComponent implements OnInit {

  total_marks: any = 0;
  total_percentage: any = 0;
   
   students: StudentData[] = [
    { exmdate: '14/12/2019' , subject: 'Maths', obt_marks: 45, ttl_marks: 50, per: 90},
    { exmdate: '15/12/2019' , subject: 'Science', obt_marks: 45, ttl_marks: 50, per: 90 },
    { exmdate: '16/12/2019' , subject: 'English', obt_marks: 44, ttl_marks: 50, per: 88 },
    { exmdate: '17/12/2019' , subject: 'Hindi', obt_marks: 35, ttl_marks: 50, per: 70 },
    { exmdate: '18/12/2019' , subject: 'Social Studies', obt_marks: 49, ttl_marks: 50, per: 98 },
    //{ exmdate: '', subject: 'Total', obt_marks: this.total_marks, ttl_marks: 250, per: this.total_percentage}
  ]
  // tper="87%"
  
  displayedColumns: string[] = ['exmdate' , 'subject', 'obt_marks', 'ttl_marks', 'per'];
  dataSource: MatTableDataSource<StudentData>;



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());

  ngOnInit() {
    
    this.total_percentage = this.total_percentage / 5;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getTotalObt() {
    return this.students.map(t => t.obt_marks).reduce((acc, value) => acc + value, 0);
  }
  getTotal() {
    return this.students.map(t => t.ttl_marks).reduce((acc, value) => acc + value, 0);
  }
  result = []
  constructor(private PrintService: PrintService) {
    for (let i = 0; i < this.students.length; i++) {
      if (!this.result.includes(this.students.map(exmdate => exmdate.exmdate)[i]))
        this.result.push(this.students.map(exmdate => exmdate.exmdate)[i])
    }
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.students);

    // totol marks cal
    // total marks
    this.students.forEach(x => { this.total_marks = this.total_marks + x.obt_marks; console.log(this.total_marks); });
    // total parcentage
    this.students.forEach(x => { this.total_percentage = this.total_percentage + x.per; });
  }
    generateReport() {
      // table column to display in pdf
      let columns: string[] = ['Date', 'Subject', 'Obtained Marks', 'Total Marks', 'Percentage'];
  
      // this.PrintService.generateReport(data, columns, pdftitle)
      this.PrintService.generateResultReport(this.dataSource.filteredData, columns, 'Result Details',this.getTotalObt(), this.getTotal(),this.total_percentage)
    }
}
