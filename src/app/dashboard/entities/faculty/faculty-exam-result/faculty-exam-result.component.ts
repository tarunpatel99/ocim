import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { PrintService } from 'src/app/dashboard/printservice/print.service';
import { StudentResultData } from "../faculty.model";


@Component({
  selector: 'app-faculty-exam-result',
  templateUrl: './faculty-exam-result.component.html',
  styleUrls: ['./faculty-exam-result.component.css']
})
export class FacultyExamResultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'subject', 'obt_marks', 'ttl_marks'];
  dataSource: MatTableDataSource<StudentResultData>;
  hide: boolean = false

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  date = new FormControl(new Date());
  // get student info from local data
  students = [
    { id: '19-9th-001', name: 'Harshil Patel Science', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Science', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Science', obt_marks: 17, ttl_marks: 50 },
    { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
    { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-001', name: 'Harshil Patel Science', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Science', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Science', obt_marks: 17, ttl_marks: 50 },
    { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
    { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-001', name: 'Harshil Patel Science', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Science', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Science', obt_marks: 17, ttl_marks: 50 },
    { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
    { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-001', name: 'Harshil Patel Science', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Science', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Science', obt_marks: 17, ttl_marks: 50 },
    { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
    { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-001', name: 'Harshil Patel Science', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Science', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Science', obt_marks: 17, ttl_marks: 50 },
    { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
    { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 }
  ]

  subjectlist = []
  constructor(private PrintService: PrintService) {
    for (let i = 0; i < this.students.length; i++) {
      if (!this.subjectlist.includes(this.students.map(subject => subject.subject)[i]))
        this.subjectlist.push(this.students.map(subject => subject.subject)[i])
    }
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate =
      (data: StudentResultData, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        });
        return matchFilter.every(Boolean);
      };
  }

  // filtering data
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  resetForm() {
    console.log('Funtion called on focus!')
  }

  applyFilter(selectedValue: string, columnName: string) {
    // selectedValue = selectedValue.trim(); // Remove whitespace
    console.log('Funtion called on value change!')
    selectedValue = selectedValue.trim().toLowerCase(); // MatTableDataSource defaults to lowercase matches
    const tableFilters = [];
    tableFilters.push({
      id: columnName,
      value: selectedValue
    });
    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    // debugger
  }

  generateReport() {
    // table column to display in pdf
    let columns: string[] = ['id', 'Name', 'Date', 'Subject', 'Obtained Marks', 'Total Marks'];

    // this.PrintService.generateReport(data, columns, pdftitle)
    this.PrintService.generateReport(this.dataSource.filteredData, columns, 'Student Result')
  }
}
