import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  selector: 'app-student-leave-note',
  templateUrl: './student-leave-note.component.html',
  styleUrls: ['./student-leave-note.component.css']
})
export class StudentLeaveNoteComponent implements OnInit {

  displayedColumns: string[] = [ 'subject', 'from', 'to', 'status','action'];
  dataSource: MatTableDataSource<LeaveNote>;
  selectedLeave: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  // leave notes data
  leaves: LeaveNote[] = [
    {
      id: "132",
      class: "9",
      studentName: "Tarun Patel",
      subject: "Fever",
      description: "A temporary increase in average body temperature of 98.6°F (37°C).",
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
      class: "9",
      studentName: "Harshil Sureja",
      subject: "Fever",
      description: "A temporary increase in average body temperature of 98.6°F (37°C).",
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
      class: "9",
      studentName: "Aakash Bhavasar",
      subject: "Fever",
      description: "A temporary increase in average body temperature of 98.6°F (37°C).",
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
   openDialog(): void {
    const dialogRef = this.dialog.open(ApplyLeave, {
      width: '525px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onViewLeaveNote(event, leave): void {
    this.selectedLeave = leave
    const dialogRef = this.dialog.open(actiondialog, {
      width: '500px',
      data: {studentName: this.selectedLeave.studentName,
        class: this.selectedLeave.class,
        subject: this.selectedLeave.subject,
        attatchments: this.selectedLeave.attatchments,
        description: this.selectedLeave.description,
        from: this.selectedLeave.leaveFrom,
        to: this.selectedLeave.leaveTo,
        status: this.selectedLeave.status}
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
        return '#212121'; // grey
      case 'Approved':
        return '#43a047'; // green
      case 'Denied':
        return '#C62828'; // red
    }
  }

}

@Component({
  selector: 'actionview',
  templateUrl: 'actionview.html',
  styleUrls: ['actionview.css']
})
export class actiondialog implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<actiondialog>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveNote) { }

  onSave(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    
  }

}
// Add task and work form dialog box
@Component({
  selector: 'apply-leave',
  templateUrl: 'applyleave.html',
  styleUrls: ['applyleave.css']
})
export class ApplyLeave {
  date = new FormControl(new Date());
  applyleavedialog: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ApplyLeave>,
    @Inject(MAT_DIALOG_DATA) public data: LeaveNote) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // this.dialogRef.close();
    if (this.applyleavedialog.invalid) {
      return;
    }
  }
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
  ngOnInit(){
    this.applyleavedialog = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      date: new FormControl(null, {
        validators: [Validators.required]
      }),
      msg: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }
}