import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

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
    { id: "132", class: "8", studentName: "Tarun Patel", subject: "Khabar nai", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Approved" },
    { id: "126", class: "8", studentName: "Tarun Patel", subject: "Khabar nai", description: "Dr. ne mali lo", leaveFrom: "12/12/2019", leaveTo: "22/12/2019", attatchment: [{ id: "Attatchment one" }, { id: "Attatchment two" }], status: "Denied" },
  ]
  


@Component({
  selector: 'app-branch-leave-notes',
  templateUrl: './branch-leave-notes.component.html',
  styleUrls: ['./branch-leave-notes.component.css']
})
export class BranchLeaveNotesComponent implements OnInit {


  constructor() {
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

}
