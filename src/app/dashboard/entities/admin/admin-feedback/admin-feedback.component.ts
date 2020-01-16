import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';

export interface feedback {
  id?: String;
  date: string;
  feedbackby: string;
  institute: string
  title: string;
  description: string
}

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent implements OnInit {

  feedbacks: feedback[] = [
    { date: '07-11-2019', feedbackby: 'Tarun Patel', institute: 'Gyan Jyot', title: 'Very nice application', description: 'Bau j mast appliaction banavi che tame.' },
    { date: '17-10-2019', feedbackby: 'Shivam Patel', institute: 'Shivam Classes', title: 'Gajjab', description: 'Application joi ne maja avi gai' }
  ]

  constructor() { }
  displayedColumns: string[] = ['date', 'feedbackby', 'institute', 'title', 'description'];
  dataSource = new MatTableDataSource<feedback>(this.feedbacks);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  date = new FormControl(new Date());




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
}
