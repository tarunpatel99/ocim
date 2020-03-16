import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface Payment_element {
  date: string;
  institute: String;
  email: string;
  phone: string;
  students: number;
  paymnet_method: string;
  amount: number;
}


@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {

  Payment_Data: Payment_element[] = [
    { date: '8-12-2019', institute: 'GyanJyot', email: 'contact@gyanjyot.com', phone: '9999888776', students: 1500, paymnet_method: 'Debit Card', amount: 30000 },
    { date: '7-11-2019', institute: 'Sarjak Institute', email: 'contact@sarjak.com', phone: '8354216544', students: 557, paymnet_method: 'Debit Card', amount: 11140 },
    { date: '6-11-2019', institute: 'Sankte Gruop tuition', email: 'contact@sanket.com', phone: '9745651232', students: 112, paymnet_method: 'Debit Card', amount: 2240 },
    { date: '5-10-2019', institute: 'Jadeja tuition classes', email: 'jadeja.tuition@gmail.com', phone: '9644534564', students: 422, paymnet_method: 'Debit Card', amount: 8440 },
    { date: '4-9-2019', institute: 'Sandip Patel group tuition', email: 'contact@sp.com', phone: '9999888776', students: 900, paymnet_method: 'Debit Card', amount: 18000 }
    
  ]


  constructor() { }
  displayedColumns_pay: string[] = ['date', 'institute', 'email', 'phone', 'students', 'paymnet_method', 'amount'];
  dataSource_pay = new MatTableDataSource<Payment_element>(this.Payment_Data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
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
}
