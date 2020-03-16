import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private AuthService: AuthService) { }
  margins: any = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 100
  };

  appName = 'Online Coching Institute Management'

  alignLeft = 40
  alignRight(doc, text) {
    return doc.internal.pageSize.width - doc.getTextWidth(text) - 40
  }
  alignCenter(doc, text) {
    return (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2);
  }

  generateReport(data: any[], columns: string[], pdfTitle: string) {
    let doc = new jsPDF('p', 'pt', 'a4');
    // tableId = '#' + tableId
    doc.page = 1

    let rows: any[] = []
    data.forEach(record => {
      let temp = Object.values(record)
      rows.push(temp)
    })

    console.log(doc.internal.getCurrentPageInfo().pageNumber)
    let morInfo = "Sorted By : Gujarat"
    this.headingFormatting(doc)
    doc.text(morInfo, this.alignLeft, 168);
    doc.autoTable(columns, rows, {
      // html: tableId,
      theme: 'grid', // striped | grid | plain
      ignoreColumns: 'Action',
      margin: {
        top: this.margins.top
      },
      startY: 180
    });


    console.log(doc.pageCount)

    doc.setProperties({
      title: pdfTitle,
      // subject: 'Studet result',
      // author: 'PDFAuthor',
      // keywords: 'generated, javascript, web 2.0, ajax',
      // creator: 'My Company'
    });

    this.headerFooterFormatting(doc, doc.internal.getNumberOfPages())

    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = doc.output('datauristring');
  };

  generateGraphicalReport(element: string, pdfTitle: string) {
    let doc = new jsPDF('p', 'pt', 'a4');
    let source = <HTMLCanvasElement> document.querySelector('#' + element);

    //create image from dummy canvas
    let graph = source.toDataURL("image/png", 1.0);

    doc.setProperties({
      title: pdfTitle,
      // subject: 'Studet result',
      // author: 'PDFAuthor',
      // keywords: 'generated, javascript, web 2.0, ajax',
      // creator: 'My Company'
    });

    //creates PDF from img
    this.headingFormatting(doc)
    doc.addImage(graph, 'JPEG', 40, 180, doc.internal.pageSize.width - 80, 250);

    // open pdf in new tab
    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = doc.output('datauristring');
    // doc.save('new-canvas.pdf');
  }

  feesReceipt(tableId: string) {
    let doc = new jsPDF('p', 'pt', 'a4');
    tableId = '#' + tableId
    doc.page = 1

    this.headingFormatting(doc)

    doc.autoTable({
      html: tableId,
      theme: 'grid', // striped | grid | plain
      margin: {
        top: this.margins.top + 120
      }
    });

    doc.setProperties({
      title: 'Student result',
      // subject: 'Studet result',
      // author: 'PDFAuthor',
      // keywords: 'generated, javascript, web 2.0, ajax',
      // creator: 'My Company'
    });

    this.headerFooterFormatting(doc, doc.internal.getNumberOfPages())

    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = doc.output('datauristring');
  };

  headingFormatting(doc) {
    let instituteName = 'Gyanjyot Institute'
    let branchName = 'Branch : ' + 'SBI Bopal Branch'
    let currrentDate = 'Date : ' + new Date().toDateString()
    let role = this.AuthService.currentuser.role
    let name = 'Name : ' + 'Harshil Sureja'
    let phone = 'Phone : ' + 9099682234
    let email = 'Email : ' + this.AuthService.currentuser.email

    // doc.text(text, x, y, flags, angle, align)
    doc.setFontSize(12)
    doc.text(instituteName, this.alignLeft, 40);
    doc.text(branchName, this.alignLeft, 57);
    doc.text(currrentDate, this.alignRight(doc, currrentDate), 57);
    doc.setFontSize(24)
    doc.setFontType('bold');
    doc.text(role, this.alignRight(doc, role), 85)
    doc.setFontType('normal')
    doc.setFontSize(12)
    doc.text(name, this.alignRight(doc, name), 105);
    doc.text(phone, this.alignRight(doc, phone), 122);
    doc.text(email, this.alignRight(doc, email), 139);
    doc.line(40, 148, doc.internal.pageSize.width - 40, 148)

  }

  headerFooterFormatting(doc, totalPages) {
    for (let i = totalPages; i >= 1; i--) {
      doc.setPage(i);
      // header
      // if (i > 1)
      // this.header(doc);

      // footer
      this.footer(doc, i, totalPages);
      doc.page++;
    }
  };

  header(doc) {
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.setFontStyle('normal');

    // if (base64Img) {
    // 	doc.addImage(base64Img, 'JPEG', this.margins.left, 10, 40, 40);
    // }

    doc.text("Student result", this.margins.left + 20, 60);
    doc.setLineCap(2);
    // doc.line(3, 70, this.margins.width + 43, 70); // horizontal line
  };

  footer(doc, pageNumber, totalPages) {

    let str = "Page " + pageNumber + " of " + totalPages
    doc.setFontSize(10);
    doc.text(this.appName, this.alignLeft, doc.internal.pageSize.height - 20)
    doc.text(str, this.alignRight(doc, str), doc.internal.pageSize.height - 20);

  };

  generateResultReport(data: any[], columns: string[], pdfTitle: string, marks: number,totalmarks: number, percentage: number) {
    let doc = new jsPDF('p', 'pt', 'a4');
    // tableId = '#' + tableId
    doc.page = 1
    let morInfo = "Exam : Unit Test 1"
    doc.text(morInfo, this.alignLeft, 168);

    let rows: any[] = []
    data.forEach(record => {
      let temp = Object.values(record)
      rows.push(temp)
    })

    console.log(doc.internal.getCurrentPageInfo().pageNumber)

    this.headingFormatting(doc)
    doc.autoTable(columns, rows, {
      // html: tableId,
      theme: 'grid', // striped | grid | plain
      ignoreColumns: 'Action',
      margin: {
        top: this.margins.top
      },
      foot: [['','TOTAL',marks,totalmarks,percentage]],
      startY: 180
    });

    
    console.log(doc.pageCount)

    doc.setProperties({
      title: 'Student result',
      // subject: 'Studet result',
      // author: 'PDFAuthor',
      // keywords: 'generated, javascript, web 2.0, ajax',
      // creator: 'My Company'
    });

    this.headerFooterFormatting(doc, doc.internal.getNumberOfPages())

    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = doc.output('datauristring');
  };
}
