import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


export interface Attatchment {
  id: string
}

export interface Class {
  value: string;
  viewValue: string;
}

export interface Status {
  value: string;
  viewValue: string;
}

export interface LeaveNote {
  id: string,
  class: string,
  studentName: string,
  subject: string,
  description: string,
  leaveFrom: string,
  leaveTo: string,
  attatchment: Array<Attatchment>,
  status: string
}
  


  // leave notes data
  const leaves: LeaveNote[] = [
    { id: "19-9th-001", class: "9 (A Div)", studentName: "Harshil Patel", subject: "Fever", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
    // { id: "19-9th-002", class: "9 (A Div)", studentName: "Nirav Kadiya", subject: "Dengue", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "11/12/2019", leaveTo: "25/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Denied" },
    // { id: "19-9th-003", class: "9 (A Div)", studentName: "Shubham Mevada", subject: "Cold", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "1/12/2019", leaveTo: "29/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Pending" },
    // { id: "19-9th-004", class: "9 (A Div)", studentName: "Shubha Bhatt", subject: "Dengue", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "5/1/2020", leaveTo: "15/1/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Denied" },
    // { id: "19-9th-005", class: "9 (A Div)", studentName: "Tarun Patel", subject: "Dengue", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "7/1/2020", leaveTo: "12/1/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Pending" },
    // { id: "19-9th-006", class: "9 (A Div)", studentName: "Aakash Bhavasar", subject: "Fever", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "12/1/2020", leaveTo: "22/1/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Pending" },
    // { id: "19-9th-007", class: "9 (A Div)", studentName: "Harshil Sureja", subject: "Cold", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "15/1/2020", leaveTo: "30/1/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Denied" },
    { id: "19-9th-008", class: "9 (A Div)", studentName: "Saurabh Oza", subject: "Cold", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "1/2/2020", leaveTo: "5/2/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
    { id: "19-9th-009", class: "9 (A Div)", studentName: "Hastik Bhut", subject: "DenguFevere", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "4/2/2020", leaveTo: "8/2/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
    { id: "19-9th-010", class: "9 (A Div)", studentName: "Yash Charola", subject: "Fever", description: "A temporary increase in average body temperature of 98.6°F (37°C).", leaveFrom: "12/2/2020", leaveTo: "22/2/2020", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
  ]
  


@Component({
  selector: 'app-branch-leave-notes',
  templateUrl: './branch-leave-notes.component.html',
  styleUrls: ['./branch-leave-notes.component.css']
})
export class BranchLeaveNotesComponent implements OnInit {
  selectedLeave: any;
 

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(leaves);
  }


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

  statuss: Status[] = [
    {value: 'Approved', viewValue: 'Approved'},
    {value: 'Denied', viewValue: 'Denied'},
    {value: 'Pending', viewValue: 'Pending'},
  ]

  displayedColumns: string[] = ['id','name', 'class', 'subject', 'from', 'to', 'status','action'];
  dataSource: MatTableDataSource<LeaveNote>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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

  getColor(status) {
    switch (status) {
      case 'Pending':
        return '#212121'; // not black
      case 'Approved':
        return '#43a047'; // green
      case 'Denied':
        return '#C62828'; // red
    }
  }




  // open dialog box
  onViewLeaveNote(event, leave): void {
    this.selectedLeave = leave
    const dialogRef = this.dialog.open(LeaveNoteFormDialog, {
      width: '500px',
      data: { studentName: this.selectedLeave.studentName , 
              class: this.selectedLeave.class , 
              subject: this.selectedLeave.subject, 
              description: this.selectedLeave.description, 
              from: this.selectedLeave.leaveFrom, 
              to: this.selectedLeave.leaveTo , 
              attatchments: this.selectedLeave.attatchments}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}





// view leave note details dialog box
@Component({
  selector: 'dialog-leave-note',
  templateUrl: 'leave-note.form.html',
  styleUrls: ['leave-note.form.css']
})
export class LeaveNoteFormDialog implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<LeaveNoteFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveNote) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

}
