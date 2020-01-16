import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface StudentData {
  title: string;
  description: string;
  exmdate: string;
  class: string;
  subject: string;
  ttl_marks: number; // totla marks
  passing_mark: number;
}

// get student info from local data
const students: StudentData[] = [
  { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 1' , description: 'Unit 1' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 1' , description: 'Unit 1' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Chemistry', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 3' , description: 'Unit 1, 2, 3' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 1' , description: 'Unit 1' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Chemistry', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Bio', ttl_marks: 50, passing_mark: 17 },
  { title: 'class test 2' , description: 'Unit 1, 2' , exmdate: '14/12/2019' , class: '11 SCI Bio' , subject: 'Physics', ttl_marks: 50, passing_mark: 17 }
]

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
  selector: 'app-branch-exam-schedule',
  templateUrl: './branch-exam-schedule.component.html',
  styleUrls: ['./branch-exam-schedule.component.css']
})
export class BranchExamScheduleComponent implements OnInit {

  constructor() {     
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(students);
  }

 
  classsbjs: Classsbj[] = [
    {value: '8-a-div', viewValue: '8 (A Div)'},
    {value: '8-b-div', viewValue: '8 (B Div)'},
    {value: '9-a-div', viewValue: '9 (A Div)'},
    {value: '9-b-div', viewValue: '9 (B Div)'},
    {value: '10-a-div', viewValue: '10 (A Div)'},
    {value: '10-b-div', viewValue: '10 (B Div)'},
    {value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)'},
    {value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)'},
    {value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)'},
    {value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)'},
    {value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)'},
    {value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)'},
    {value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)'},
    {value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)'}
  ];

  subjects: Subjectexm[] = [
    {value: 'Science', viewValue: 'Science'},
    {value: 'Maths', viewValue: 'Maths'},
    {value: 'Social', viewValue: 'Social'},
    {value: 'Bio', viewValue: 'Bio'}
  ]
  
  exmmarks: exmmark[] = [
    {value: '19-9th-001', name: 'Harshil Sureja'},
    {value: '19-9th-002', name: 'Tarun Patel'},
    {value: '19-9th-003', name: 'Harshil Patel'},
    {value: '19-9th-004', name: 'Mihir Kamariya'},
    {value: '19-9th-005', name: 'Shubh Bhatt'},
    {value: '19-9th-006', name: 'Nirav Rajput'},
    {value: '19-9th-007', name: 'Aakash Bhavsar'},
    {value: '19-9th-008', name: 'Hastik Bhut'},
    {value: '19-9th-009', name: 'Yash Charola'},
    {value: '19-9th-010', name: 'Bhautik Patel'},
    {value: '19-9th-012', name: 'Anuj Shyara'},
    {value: '19-9th-013', name: 'Parth Patel'},
    {value: '19-9th-014', name: 'Anonymous Patel'},
    {value: '19-9th-015', name: 'Anonymous Patel'},
    {value: '19-9th-016', name: 'Anonymous Patel'},
    {value: '19-9th-017', name: 'Anonymous Patel'},
    {value: '19-9th-018', name: 'Anonymous Patel'},
    {value: '19-9th-019', name: 'Anonymous Patel'},
    {value: '19-9th-020', name: 'Anonymous Patel'},
  ]


  displayedColumns: string[] = ['title', 'description', 'exmdate' , 'class' , 'subject', 'ttl_marks' , 'passing_mark' , 'action'];
  dataSource: MatTableDataSource<StudentData>;



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());

 
  addExamscheduleForm: FormGroup;



  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.addExamscheduleForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      class: new FormControl(null, {
        validators: [Validators.required]
      }),
      subject: new FormControl(null, {
        validators: [Validators.required]
      }),
      dateofexam: new FormControl(null, {
        validators: [Validators.required]
      }),
      totalmark: new FormControl(null, {
        validators: [Validators.required]
      }),
      passingmark: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }



  // filtering data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  onSave(): void {
    // console.log("Form Submitted!");
    if (this.addExamscheduleForm.invalid) {
      return;
    }
  }

}
