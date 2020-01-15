import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewTimeTableComponent } from '../../faculty/faculty-time-table/view-time-table/view-time-table.component';

@Component({
  selector: 'app-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.css']
})
export class StudentTimetableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  onViewTimeTable(url: string): void {
    const dialogRef = this.dialog.open(ViewTimeTableComponent, {
      width: 'fit-content',
      panelClass: 'custom-dialog',
      data: {url: url}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

