import { Component, OnInit ,ViewChild, Inject} from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';




export interface Class {
  value: string;
  viewValue: string;
  // students: Std_element[]
}


export interface DialogData {
  class: string,
  subject: string,
  iss_date: Date, // Issue date
  sub_date: Date, // submission date
  title: string,
  description: string
}




export interface Std_element {
  rollno: string;
  name: string;
  class: string;
  sem: string;
  amount: string;
  status: string;
  date: String;
}



const Student_Data: Std_element[] = [
  {rollno: '19-bio-11', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Paid' , date: '21-12-2019'},
  {rollno: '19-bio-12', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Unpaid' , date: '21-12-2019'},
  {rollno: '19-bio-13', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Paid' , date: '21-12-2019'},
  {rollno: '19-bio-14', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Unpaid' , date: '21-12-2019'},
  {rollno: '19-bio-15', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Unpaid' , date: '21-12-2019'},
  {rollno: '19-bio-16', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Paid' , date: '21-12-2019'},
  {rollno: '19-bio-17', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Unpaid' , date: '21-12-2019'},
  {rollno: '19-bio-18', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Paid' , date: '21-12-2019'},
  {rollno: '19-bio-19', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Paid' , date: '21-12-2019'},
  {rollno: '19-bio-20', name: 'Student Middlename Surname', class: '11 Sci Bio' , sem: 'sem 2' , amount: '20000' , status: 'Unpaid' , date: '21-12-2019'},
];


export interface Announcement_element {
  date: string;
  class: string;
  title: string;
  amount: string;
}


const Announcement_Data: Announcement_element[] = [
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'},
  {date: '20-12-2019' , class: '11 Sci Bio' , title: 'Sem 2' , amount: '25000'}
]





@Component({
  selector: 'app-branch-fees',
  templateUrl: './branch-fees.component.html',
  styleUrls: ['./branch-fees.component.css']
})
export class BranchFeesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }



  classes: Class[] = [
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


  displayedColumns: string[] = ['rollno' , 'name', 'class' , 'sem' , 'amount' , 'status' , 'date'];
  dataSource = new MatTableDataSource<Std_element>(Student_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource_ancmnt.paginator = this.paginator;
    this.dataSource_ancmnt.sort = this.sort;
  }

  // filtering data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  displayedColumns_ancmnt: string[] = ['date' , 'class' , 'title' , 'amount'];
  dataSource_ancmnt = new MatTableDataSource<Announcement_element>(Announcement_Data);

  // filtering data
  applyFilter_ancmnt(filterValue: string) {
    this.dataSource_ancmnt.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_ancmnt.paginator) {
      this.dataSource_ancmnt.paginator.firstPage();
    }
  }



 
  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(announcementFormDialog, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  getColor(status) {
    switch (status) {
      case 'Paid':
        return '#43a047'; // green
      case 'Unpaid':
        return '#C62828'; // red
    }
  }
}

export interface classNoticeList {
  value: string;
  viewValue: string;
}


// Add time table form dialog box
@Component({
  selector: 'dialog-announcement',
  templateUrl: 'announcement.form.html',
  styleUrls: ['announcement.form.css']
})
export class announcementFormDialog {
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<announcementFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    classannouncement = new FormControl();

    // classNoticeList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    Classsbj: classNoticeList[] = [
      {value: 'All' , viewValue: 'All'},
      {value: '8 (A Div)', viewValue: '8 (A Div)'},
      {value: '8 (B Div)', viewValue: '8 (B Div)'},
      {value: '9 (A Div)', viewValue: '9 (A Div)'},
      {value: '9 (B Div)', viewValue: '9 (B Div)'},
      {value: '10 (A Div)', viewValue: '10 (A Div)'},
      {value: '10 (B Div)', viewValue: '10 (B Div)'},
      {value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)'},
      {value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)'},
      {value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)'},
      {value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)'},
      {value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)'},
      {value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)'},
      {value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)'},
      {value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)'}
    ];

  onSave(): void {
    this.dialogRef.close();
  }

  onAddtimetable(): void { }

}