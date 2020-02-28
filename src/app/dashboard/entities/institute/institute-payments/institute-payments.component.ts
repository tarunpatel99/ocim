import { Component, OnInit, ViewChild } from '@angular/core';
import { __values } from 'tslib';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { PrintService } from 'src/app/dashboard/printservice/print.service';





export interface Institute {
  branch: string;
  students: number;
}

export interface Pay {
  item: string;
  value: number;
}


export interface Payment_element {
  date: string;
  nofostudents: number;
  paymnet_method: string;
  amount: number;
}


const Payment_Data: Payment_element[] = [
  // {date: '8-12-2019' , nofostudents: 1456 , paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '6-11-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '5-10-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  {date: '4-9-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  {date: '3-8-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  {date: '1-7-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  {date: '2-6-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  {date: '1-5-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120}
]




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



  displayedColumns_pay: string[] = ['date' , 'nofostudents' , 'paymnet_method' , 'amount'];
  dataSource_pay = new MatTableDataSource<Payment_element>(Payment_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit() {
    this.dataSource_pay.paginator = this.paginator;
    this.dataSource_pay.sort = this.sort;
  }

  // filtering data
  applyFilter_pay(filterValue: string) {
    this.dataSource_pay.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_pay.paginator) {
      this.dataSource_pay.paginator.firstPage();
    }
  }




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

paymentList = []
Payment_Data = [
  {date: '8-12-2019' , nofostudents: 1456 , paymnet_method: 'Debit Card' , amount: 29120},
  {date: '6-11-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  {date: '5-10-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '4-9-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '3-8-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '1-7-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '2-6-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120},
  // {date: '1-5-2019' , nofostudents: 1456, paymnet_method: 'Debit Card' , amount: 29120}
]
constructor(private PrintService: PrintService) {
  for (let i = 0; i < this.Payment_Data.length; i++) {
    if (!this.paymentList.includes(this.Payment_Data.map(date => date.date)[i]))
      this.paymentList.push(this.Payment_Data.map(date => date.date)[i])
  }
  // Assign the data to the data source for the table to render
  this.dataSource_pay = new MatTableDataSource(this.Payment_Data);
}
  generateReport() {
    // table column to display in pdf
    let columns: string[] = ['date', 'nofostudents', 'paymnet_method', 'amount'];

    // this.PrintService.generateReport(data, columns, pdftitle)
    this.PrintService.generateReport(this.dataSource_pay.filteredData, columns, 'Payment Details')
  }

}
