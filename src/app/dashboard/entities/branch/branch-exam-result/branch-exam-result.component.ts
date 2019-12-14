import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';



export interface StudentData {
  id: string;
  name: string;
  exmdate: string;
  subject: string;
  obt_marks: number; // obtain marks from total marks
  ttl_marks: number; // totla marks
}

// get student info from local data
const students: StudentData[] = [
  { id: '17-BCA-068', name: 'Harshil Sureja', exmdate: '14-dec-2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { id: '17-BCA-078', name: 'Nirav Kadiya', exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { id: '17-BCA-081', name: 'Shubham Mevada', exmdate: '14/12/2019' , subject: 'Python', obt_marks: 44, ttl_marks: 50 },
  { id: '17-BCA-105', name: 'Shubha Bhatt', exmdate: '14/12/2019' , subject: 'VB', obt_marks: 35, ttl_marks: 50 },
  { id: '17-BCA-140', name: 'Aakash Bhavasar', exmdate: '14/12/2019' , subject: 'DCN', obt_marks: 49, ttl_marks: 50 },
  { id: '17-BCA-068', name: 'Harshil Sureja', exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { id: '17-BCA-078', name: 'Nirav Kadiya', exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 45, ttl_marks: 50 },
  { id: '17-BCA-081', name: 'Shubham Mevada', exmdate: '14/12/2019' , subject: 'Python', obt_marks: 44, ttl_marks: 50 },
  { id: '17-BCA-105', name: 'Shubha Bhatt', exmdate: '14/12/2019' , subject: 'VB', obt_marks: 35, ttl_marks: 50 },
  { id: '17-BCA-126', name: 'Tarun Patel', exmdate: '14/12/2019' , subject: 'OSOS', obt_marks: 17, ttl_marks: 50 },
  { id: '17-BCA-140', name: 'Aakash Bhavasar', exmdate: '14/12/2019' , subject: 'DCN', obt_marks: 49, ttl_marks: 50 }
]




@Component({
  selector: 'app-branch-exam-result',
  templateUrl: './branch-exam-result.component.html',
  styleUrls: ['./branch-exam-result.component.css']
})
export class BranchExamResultComponent implements OnInit {

  constructor() {
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(students);
  }


  
  displayedColumns: string[] = ['id', 'name', 'exmdate' , 'subject', 'obt_marks', 'ttl_marks' , 'action'];
  dataSource: MatTableDataSource<StudentData>;



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());

 


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  // filtering data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
