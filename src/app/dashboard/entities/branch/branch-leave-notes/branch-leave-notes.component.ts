import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


export interface Attatchment {
  id: string
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
    { id: "132", class: "8", studentName: "Tarun Patel", subject: "Khabar nai", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Pending" },
    { id: "132", class: "9", studentName: "Tarun Patel", subject: "Khabar nai", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
    { id: "126", class: "7", studentName: "Tarun Patel", subject: "Khabar nai", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Denied" },
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


  displayedColumns: string[] = ['name', 'class', 'subject', 'from', 'to', 'status','action'];
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
