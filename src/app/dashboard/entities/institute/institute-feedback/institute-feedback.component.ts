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
  selector: 'app-institute-feedback',
  templateUrl: './institute-feedback.component.html',
  styleUrls: ['./institute-feedback.component.css']
})
export class InstituteFeedbackComponent implements OnInit {
  feedbacks: feedback[] = [
    { date: '17-10-2019', feedbackby: 'Aakash Bhavasar', institute: 'Shivam Classes', title: 'Amazing life saver. ', description: 'My phone had to go thru a master reset after being cracking the screen on concrete.' }
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
