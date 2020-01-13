import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewTimeTableComponent } from './view-time-table/view-time-table.component';

@Component({
  selector: 'app-faculty-time-table',
  templateUrl: './faculty-time-table.component.html',
  styleUrls: ['./faculty-time-table.component.css']
})
export class FacultyTimeTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // open dialog box
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
