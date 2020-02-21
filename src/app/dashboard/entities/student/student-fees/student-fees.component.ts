import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable'

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

const students: StudentFees[] = [
  { std: 8 , sem: 2, mode: 'Online', date: '29-12-2019', amount: 45000, status: "Unpaid"},
  { std: 8 , sem: 1, mode: 'Online', date: '29-12-2019', amount: 45000, status: "Paid"},
]
@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.css']
})
export class StudentFeesComponent implements OnInit {

  constructor() {
    this.dataSource = new MatTableDataSource(students);
   }
   displayedColumns: string[] = ['std' , 'sem', 'mode', 'date', 'amount', 'status', 'print'];
  dataSource: MatTableDataSource<StudentFees>;
  ngOnInit() {
  }

  onPrint() {
    let doc = new jsPDF("p", "pt", "a4") as jsPDFWithPlugin;
    doc.setFont("arial", "bold");
    doc.setFontSize(23);
    doc.text(180,18,'Gyanjyot Institute')
    doc.setFont("arial", "normal");
    doc.setFontSize(12);
    doc.text(220,35,'SBI Bopal Branch');
    doc.setLineCap(2);
    doc.setFont("arial", "bold");
    doc.setFontSize(15);
    doc.text(40,75,'Payment Receipt');
    doc.setFontSize(10);
    doc.text(40,600,"NOTE: THIS IS A COMPUTER-GENERATED DOCUMENT AND IT DOES NOT REQUIRE A SIGNATURE.");
    //doc.line(15, 15, 200, 15);
    doc.line(40, 80, 550, 80);
    doc.line(40, 100, 550, 100);
    doc.line(40, 340,550, 340);
    doc.line(40, 360,550, 360);
    doc.line(40, 520,550, 520);
    
    doc.autoTable({
      margin: {top:80},
      theme: "plain",
      tableWidth: 'auto',
			styles: {
        minCellHeight: 30
			},
      
      head:[['REC. NO.','1','DATE: 01-04-2019']],
      body:[
        ['Regn No.','1'],
        ['Student:','Ajay Malhotra'],
        ['Father:','Mr. Vinay Malhotra'],
        ['Class:','3rd'],
        ['Session:','JUNE 2020'],
        ['Sem:','2'],
        ['Receipt Number','705']
      ]
    })    
    doc.autoTable({
      theme: "plain",
      tableWidth: 'auto',
			styles: {
        minCellHeight: 30
			},
      head:[['S.N              ','Particulars','Amount']],
      body:[
        ['1','Admissison Fees','15000'],
        ['2','Tution Fees','15000'],
        ['3','Computer Fees', '1000'],
        ['4','Enrollment Fees','200'],
        ['5','Exam and Stationary','500']
      ],
      foot:[['','TOTAL AMOUNT','31700']]
    })
    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = doc.output('datauristring');
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
}
