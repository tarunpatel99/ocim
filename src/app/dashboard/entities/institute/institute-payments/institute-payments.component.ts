import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';


export interface Institute {
  branch: string;
  students: number;
}

export interface Pay {
  item: string;
  value: number;
}


@Component({
  selector: 'app-institute-payments',
  templateUrl: './institute-payments.component.html',
  styleUrls: ['./institute-payments.component.css']
})
export class InstitutePaymentsComponent implements OnInit {


  displayedColumns: string[] = ['branch', 'students'];
  Institutes: Institute[] = [
    {branch: 'House Bopal', students: 700},
    {branch: 'Ghuma', students: 500},
    {branch: 'South Bopal', students: 250},
    {branch: 'Science city', students: 300},
    {branch: 'Maninagar', students: 600},
    {branch: 'SBI Bopal', students: 500},
    {branch: 'Bapunagar', students: 500},
    {branch: 'Nerunagar', students: 600},
    {branch: 'Iscon', students: 250},
    {branch: 'Vastrapur', students: 450},
  ];

  /** Gets the total students of all Institutes. */
  getTotalStudents() {
    return this.Institutes.map(t => t.students).reduce((acc, value) => acc + value, 0);
  }

CurrentDate = new Date();

  displayedColumnsPay: string[] = ['item', 'value'];
  Payments: Pay[] = [
    // {item: 'Month', value: 1},
    {item: 'Students', value: this.getTotalStudents()},
    {item: 'Price', value: 20}
  ];

getTotalPay(){
  return this.Payments.map(t => t.value).reduce((acc, value) => acc * value, 1)
}

  constructor() { }

  ngOnInit() {
  }

}
