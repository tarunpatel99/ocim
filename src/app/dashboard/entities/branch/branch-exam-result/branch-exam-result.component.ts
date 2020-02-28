import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as html2pdf from "html2pdf.js";
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';
import { MatDialog } from '@angular/material';
import { EditResultMarkComponent } from './edit-result-mark/edit-result-mark.component';


export interface StudentData {
  id: string;
  name: string;
  classnm: string;
  exmdate: string;
  examname: string;
  maths: string;
  sciences: string;
  english: string;
  ss: string;
  obt_marks: number; // obtain marks from total marks
  ttl_marks: number; // totla marks
}

// get student info from local data
const students: StudentData[] = [
  { id: '19-9th-001', name: 'Harshil Patel', classnm: '9 (A Div)' , exmdate: '14/12/2019', examname: "Class test 1" , maths: "45/50" , sciences: "47/50" , english: "34/50" , ss:"49/50" , obt_marks: 175, ttl_marks: 200 },
  { id: '19-9th-002', name: 'Nirav Kadiya', classnm: '9 (A Div)' , exmdate: '14/12/2019', examname: "Class test 1" , maths: "44/50" , sciences: "42/50" , english: "34/50" , ss:"48/50" , obt_marks: 168, ttl_marks: 200 },
  // { id: '19-9th-003', name: 'Shubham Mevada', classnm: '9 (A Div)' , exmdate: '14/12/2019', examname: "Class test 2" , maths: "43/50" , sciences: "43/50" , english: "35/50" , ss:"47/50" , obt_marks: 168, ttl_marks: 200 },
  // { id: '19-9th-004', name: 'Shubha Bhatt', classnm: '9 (A Div)' , exmdate: '14/12/2019', examname: "Class test 2" , maths: "42/50" , sciences: "42/50" , english: "35/50" , ss:"47/50" , obt_marks: 166, ttl_marks: 200 },
  { id: '19-9th-005', name: 'Tarun Patel', classnm: '9 (A Div)' , exmdate: '18/1/2020', examname: "Class test 1" , maths: "40/50" , sciences: "43/50" , english: "38/50" , ss:"47/50" , obt_marks: 168, ttl_marks: 200 },
  // { id: '19-9th-006', name: 'Aakash Bhavasar', classnm: '9 (A Div)' , exmdate: '18/1/2020', examname: "Class test 3" , maths: "40/50" , sciences: "42/50" , english: "35/50" , ss:"48/50" , obt_marks: 165, ttl_marks: 200 },
  { id: '19-9th-007', name: 'Harshil Sureja', classnm: '9 (A Div)' , exmdate: '18/1/2020', examname: "Class test 1" , maths: "45/50" , sciences: "41/50" , english: "36/50" , ss:"48/50" , obt_marks: 170, ttl_marks: 200 },
  // { id: '19-9th-008', name: 'Saurabh Oza', classnm: '9 (A Div)' , exmdate: '16/2/2020', examname: "Class test 3" , maths: "40/50" , sciences: "41/50" , english: "35/50" , ss:"45/50" , obt_marks: 161, ttl_marks: 200 },
  // { id: '19-9th-009', name: 'Hastik Bhut', classnm: '9 (A Div)' , exmdate: '16/2/2020', examname: "Class test 1" , maths: "45/50" , sciences: "42/50" , english: "33/50" , ss:"46/50" , obt_marks: 166, ttl_marks: 200 },
  // { id: '19-9th-010', name: 'Yash Charola', classnm: '9 (A Div)' , exmdate: '16/2/2020', examname: "Class test 3" , maths: "46/50" , sciences: "41/50" , english: "31/50" , ss:"42/50" , obt_marks: 160, ttl_marks: 200 },
]

export interface Classsbj {
  value: string;
  viewValue: string;
}

export interface Subjectexm {
  value: string;
  viewValue: string;
}

export interface exmmark {
  value: string;
  name: string;

}

@Component({
  selector: 'app-branch-exam-result',
  templateUrl: './branch-exam-result.component.html',
  styleUrls: ['./branch-exam-result.component.css']
})
export class BranchExamResultComponent implements OnInit {

  @ViewChild('table', { static: false }) datatable: ElementRef;
  @ViewChild('actionCotainer', { static: false }) actionbutton: ElementRef;

  constructor(public dialog: MatDialog) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(students);
  }

  classes: Classsbj[] = [
    { value: '8-a-div', viewValue: '8 (A Div)' },
    { value: '8-b-div', viewValue: '8 (B Div)' },
    { value: '9-a-div', viewValue: '9 (A Div)' },
    { value: '9-b-div', viewValue: '9 (B Div)' },
    { value: '10-a-div', viewValue: '10 (A Div)' },
    { value: '10-b-div', viewValue: '10 (B Div)' },
    { value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)' },
    { value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)' },
    { value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)' },
    { value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)' },
    { value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)' },
    { value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)' },
    { value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)' },
    { value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)' }
  ];

  subjects: Subjectexm[] = [
    { value: 'Science', viewValue: 'Science' },
    { value: 'Maths', viewValue: 'Maths' },
    { value: 'Social', viewValue: 'Social' },
    { value: 'English', viewValue: 'English' }
  ]

  exmmarks: exmmark[] = [
    { value: '19-9th-001', name: 'Harshil Sureja' },
    { value: '19-9th-002', name: 'Tarun Patel' },
    { value: '19-9th-003', name: 'Harshil Patel' },
    { value: '19-9th-004', name: 'Mihir Kamariya' },
    { value: '19-9th-005', name: 'Shubh Bhatt' },
    { value: '19-9th-006', name: 'Nirav Rajput' },
    { value: '19-9th-007', name: 'Aakash Bhavsar' },
    { value: '19-9th-008', name: 'Hastik Bhut' },
    { value: '19-9th-009', name: 'Yash Charola' },
    { value: '19-9th-010', name: 'Bhautik Patel' },
    { value: '19-9th-012', name: 'Anuj Shyara' },
    { value: '19-9th-013', name: 'Parth Patel' },
  ]


  displayedColumns: string[] = ['id', 'name', 'classnm' , 'exmdate', 'examname' , 'maths', 'sciences' , 'english' , 'ss' , 'obt_marks', 'ttl_marks', 'action'];
  dataSource: MatTableDataSource<StudentData>;



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  date = new FormControl(new Date());



  addExamresultForm: FormGroup;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.addExamresultForm = new FormGroup({
      class: new FormControl(null, {
        validators: [Validators.required]
      }),
      exam: new FormControl(null, {
        validators: [Validators.required]
      }),
      subject: new FormControl(null, {
        validators: [Validators.required]
      }),
      obtainedmark: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  onSave(): void {
    // console.log("Form Submitted!");
    if (this.addExamresultForm.invalid) {
      return;
    }
  }


  // filtering data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditResultMark(): void {
    const dialogRef = this.dialog.open(EditResultMarkComponent, {
      width: 'auto',
      data: {}
    });
  }

  // generate report
  public downloadAsPDF() {

    const table = this.datatable.nativeElement;
    const actionButton = this.actionbutton.nativeElement;

    const options = {
      margin: 0.5,
      filename: 'exam-result-report.pdf',
      image: { type: 'jpeg', quality: 2 },
      html2canvas: { dpi: 500, scale: 2, logging: true, ignoreElements: actionButton },
      jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };

    

    html2pdf().from(table).set(options).save()

  }

}
