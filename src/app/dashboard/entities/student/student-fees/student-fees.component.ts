import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';
import { PrintService } from 'src/app/dashboard/printservice/print.service';

interface jsPDFWithPlugin extends jsPDF {
  autoTable : (options : UserOptions) => jsPDF;
}

export interface StudentFees {
  std: number;
  sem: number;
  mode: string; 
  date: string;
  amount: number;
  status: string;
}

export interface feeReceipt{
  recNo : string;
  details : string;
}


@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.css']
})

export class StudentFeesComponent implements OnInit {

  studentsReceipt: feeReceipt[] = [
    { recNo: 'Student', details: 'Ajay VinayBhai Malhotra'},
    { recNo: 'Phone', details: '9876543210'},
    { recNo: 'Class', details: '3rd'},
    { recNo: 'Sem Date', details: '1-6-2019 To 30-11-2020'},
    { recNo: 'Sem', details: '2'},
    { recNo: 'Method', details: 'Online'},
  ]
   students: StudentFees[] = [
    { std: 8 , sem: 2, mode: 'Online', date: '29-12-2019', amount: 45000, status: "Unpaid" },
    { std: 8 , sem: 1, mode: 'Online', date: '29-12-2019', amount: 45000, status: "Paid"},
  ]
  receipt = []
  constructor(private PrintService: PrintService) {
    //this.dataSource = new MatTableDataSource(this.studentsReceipt);
    this.dataSource = new MatTableDataSource(this.students);

  }
   displayedColumns: string[] = ['std' , 'sem', 'mode', 'date', 'amount', 'status', 'print'];
  dataSource: MatTableDataSource<StudentFees>;
  ngOnInit() {
  }
  

  getColor(status) {
    switch (status) {
      case 'Pending':
        return '#212121'; // grey
      case 'Paid':
        return '#43a047'; // green
      case 'Unpaid':
        return '#C62828'; // red
    }
  }
  onPrint() {
    let doc = new jsPDF("p", "pt", "a4") as jsPDFWithPlugin;
    doc.setProperties({
      title: 'Fee Receipt',
      subject: 'Fee payment receipt'
  });
  
  this.PrintService.headingFormatting(doc);
    doc.setLineCap(2);
    doc.setFont("arial", "bold");
    doc.setFontSize(15);
    //doc.text(40,155,'Payment Receipt');
    doc.setFontSize(10);
    doc.text(40,720,"NOTE: THIS IS A COMPUTER-GENERATED DOCUMENT AND IT DOES NOT REQUIRE A SIGNATURE.");
    doc.text(440,800,"Authorize Signature")
    //doc.line(15, 15, 200, 15);
    //doc.line(40, 160, 555, 160);
    //doc.line(40, 180, 555, 180);
    doc.line(40, 330,555, 330);
    doc.line(40, 350,555, 350);
    doc.line(40, 650,555, 650);
    doc.line(40, 673,555, 673);
    doc.line(40,330,40,673); // vertical line
    //doc.line(70,350,70,695); // vertical line
    doc.line(455,330,455,673); // vertical line
    doc.line(555, 330,555, 673);

    doc.autoTable({
      margin: {top:160, left:40},
      theme: "plain",
      tableWidth: 'auto',
			styles: {
        minCellHeight: 10
			},
      //head:[['REC. NO.','1','DATE: 01-04-2019']],
      body:[
        ['Regn No.','1'],
        ['Student:','Harshil Sureja'],
        ['Father:','Mr. Vinay Sureja'],
        ['Class:','8th'],
        ['Session:','JUNE 2020'],
        ['Sem:','2'],
        ['Receipt Number','705']
      ]
    })    
    doc.autoTable({
      theme: "plain",
      tableWidth: 'auto',
			styles: {
        minCellHeight: 10
			},
      head:[['Descripition','Amount']],
      body:[
        ['8th - Teaching Fees (Science, Maths, Social Studies, English, Computer(T))','30,000/-'],
        ['8th - Practical Fees (Computer)','15,000/-'],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
        ['',''],
      ],
      foot:[['TOTAL AMOUNT','45,000/-']]
    })
    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = doc.output('datauristring');
  }
    // this.PrintService.generateReport(data, columns, pdftitle)
    //this.PrintService.generateReport(this.dataSource.filteredData, columns, 'Fees Details') 
  }

