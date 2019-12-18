import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface Attatchment {
  id: string
}

export interface LeaveNote {
  subject: string,
  description: string,
  leaveFrom: string,
  leaveTo: string,
  attatchment: Array<Attatchment>,
  status: string
}


@Component({
  selector: 'app-student-leave-note',
  templateUrl: './student-leave-note.component.html',
  styleUrls: ['./student-leave-note.component.css']
})
export class StudentLeaveNoteComponent implements OnInit {

  displayedColumns: string[] = [ 'subject', 'from', 'to', 'status','action'];
  dataSource: MatTableDataSource<LeaveNote>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  // leave notes data
  leaves: LeaveNote[] = [
    { subject: "Sick Leave", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Pending" },
    { subject: "Sick Leave", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
    { subject: "Sick Leave", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Denied" },
  ]
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.leaves);
   }
   openDialog(): void {
    const dialogRef = this.dialog.open(ApplyLeaveDialog, {
      width: '250px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
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
        return '#e0e0e0'; // grey
      case 'Approved':
        return '#43a047'; // green
      case 'Denied':
        return '#e53935'; // red
    }
  }

}
// Add task and work form dialog box
@Component({
  selector: 'applyleave',
  templateUrl: 'applyleave.html',
  styleUrls: ['applyleave.css']
})
export class ApplyLeaveDialog {
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<ApplyLeaveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveNote) {}

  onSave(): void {
    this.dialogRef.close();
  }

}