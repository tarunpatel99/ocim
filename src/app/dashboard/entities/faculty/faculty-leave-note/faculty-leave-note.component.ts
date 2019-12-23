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
  attatchments: Attatchment[],
  status: string
}

@Component({
  selector: 'app-faculty-leave-note',
  templateUrl: './faculty-leave-note.component.html',
  styleUrls: ['./faculty-leave-note.component.css']
})
export class FacultyLeaveNoteComponent implements OnInit {
  displayedColumns: string[] = ['name', 'class', 'subject', 'from', 'to', 'status','action'];
  dataSource: MatTableDataSource<LeaveNote>;
  selectedLeave: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  // leave notes data
  leaves: LeaveNote[] = [
    {
      id: "132",
      class: "8",
      studentName: "Tarun Patel",
      subject: "Khabar nai",
      description: "Dr. ne mali lo",
      leaveFrom: "12/12/2019",
      leaveTo: "22/12/2019",
      attatchments: [
        {
          id: "Attatchment one"
        },
        {
          id: "Attatchment two"
        }
      ],
      status: "Pending"
    },
    {
      id: "132",
      class: "8",
      studentName: "Tarun Patel",
      subject: "Khabar nai",
      description: "Dr. ne mali lo",
      leaveFrom: "12/12/2019",
      leaveTo: "22/12/2019",
      attatchments: [
        {
          id: "Attatchment one"
        },
        {
          id: "Attatchment two"
        }
      ],
      status: "Approved"
    },
    {
      id: "126",
      class: "8",
      studentName: "Tarun Patel",
      subject: "Khabar nai",
      description: "Dr. ne mali lo",
      leaveFrom: "12/12/2019",
      leaveTo: "22/12/2019",
      attatchments: [
        {
          id: "Attatchment one"
        },
        {
          id: "Attatchment two"
        }
      ],
      status: "Denied"
    },
  ]
  
  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.leaves);
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

  // set status text color
  getColor(status) {
    switch (status) {
      case 'Pending':
        return '#212121'; // dark grey for status PENDING
      case 'Approved':
        return '#43a047'; // green for status APPROVED
      case 'Denied':
        return '#C62828'; // red for status DENIED
    }
  }

  // open dialog box
  onViewLeaveNote(event, leave): void {
    this.selectedLeave = leave
    const dialogRef = this.dialog.open(LeaveNoteViewDialog, {
      width: '500px',
      data: {studentName: this.selectedLeave.studentName, class: this.selectedLeave.class, attatchments: this.selectedLeave.attatchments}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

// view leave note details dialog box
@Component({
  selector: 'dialog-leave=note',
  templateUrl: 'leave-note.view.html',
  styleUrls: ['leave-note.view.css']
})
export class LeaveNoteViewDialog implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<LeaveNoteViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveNote) { }

  onSave(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

}
