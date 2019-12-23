import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.css']
})
export class StudentFeesComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Maths', cost: 4},
    {item: 'Science', cost: 5},
    {item: 'English', cost: 2},
    {item: 'Social Studies', cost: 4},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
