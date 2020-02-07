import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

export interface StudentData {
  id: string;
  name: string;
  date: string,
  subject: string;
  obt_marks: number; // obtain marks from total marks
  ttl_marks: number; // totla marks
}

@Component({
  selector: 'app-faculty-exam-result',
  templateUrl: './faculty-exam-result.component.html',
  styleUrls: ['./faculty-exam-result.component.css']
})
export class FacultyExamResultComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'subject', 'obt_marks', 'ttl_marks'];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  date = new FormControl(new Date());
  // get student info from local data
  students = [
    { id: '19-9th-001', name: 'Harshil Patel Science', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-002', name: 'Nirav Kadiya', date: '14/12/2019', subject: 'Science', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-003', name: 'Shubham Mevada', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-004', name: 'Shubh Bhatt', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 },
    { id: '19-9th-005', name: 'Tarun Patel', date: '14/12/2019', subject: 'Science', obt_marks: 17, ttl_marks: 50 },
    { id: '19-9th-006', name: 'Aakash Bhavasar', date: '14/12/2019', subject: 'Maths', obt_marks: 49, ttl_marks: 50 },
    { id: '19-9th-007', name: 'Harshil Sureja', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-008', name: 'Saurabh Oza', date: '14/12/2019', subject: 'Maths', obt_marks: 45, ttl_marks: 50 },
    { id: '19-9th-009', name: 'Hastik Bhut', date: '14/12/2019', subject: 'Maths', obt_marks: 44, ttl_marks: 50 },
    { id: '19-9th-010', name: 'Yash Charola', date: '14/12/2019', subject: 'Maths', obt_marks: 35, ttl_marks: 50 }
  ]

  subjectlist = []
  constructor() {
    for (let i = 0; i < this.students.length; i++) {
      if (!this.subjectlist.includes(this.students.map(subject => subject.subject)[i]))
        this.subjectlist.push(this.students.map(subject => subject.subject)[i])
    }
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate =
      (data: StudentData, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);

        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        });
        return matchFilter.every(Boolean);
      };
  }

  // filtering data
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  applyFilter(selectedValue: string, columnName: string) {
    // selectedValue = selectedValue.trim(); // Remove whitespace
    selectedValue = selectedValue.trim().toLowerCase(); // MatTableDataSource defaults to lowercase matches
    const tableFilters = [];
    tableFilters.push({
      id: columnName,
      value: selectedValue
    });
    console.log(tableFilters)
    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    // debugger
  }



  // ------------------- generating a report -------------------

  // base64Img = null;
  // 	imgToBase64('octocat.jpg', function (base64) {
  // 		this.base64Img = base64;
  // 	});

  margins: any = {
    top: 70,
    bottom: 40,
    left: 30,
    width: 100
  };

  generateReport() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.page = 1

    pdf.autoTable({
      html: '#results',
      theme: 'grid', // striped | grid | plain
      margin: {
        top: this.margins.top + 20
      }
    });

    pdf.setProperties({
      title: 'Student result',
      // subject: 'Studet result',
      // author: 'PDFAuthor',
      // keywords: 'generated, javascript, web 2.0, ajax',
      // creator: 'My Company'
    });

    this.headerFooterFormatting(pdf, pdf.internal.getNumberOfPages())

    let win = open('about:blank');
    let body = win.document.body;
    body.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0');
    let iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'height:100%; width:100%; padding:0px; margin: 0; border: 0');
    body.appendChild(iframe);

    iframe.src = pdf.output('datauristring');
  };
  headerFooterFormatting(doc, totalPages) {
    for (let i = totalPages; i >= 1; i--) {
      doc.setPage(i);
      //header
      this.header(doc);

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

  // You could either use a function similar to this or pre convert an image with for example http://dopiaza.org/tools/datauri
  // http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
  // imgToBase64(url, callback, imgVariable) {

  // 	if (!window.FileReader) {
  // 		callback(null);
  // 		return;
  // 	}
  // 	var xhr = new XMLHttpRequest();
  // 	xhr.responseType = 'blob';
  // 	xhr.onload = function () {
  // 		var reader = new FileReader();
  // 		reader.onloadend = function () {
  // 			imgVariable = reader.result.replace('text/xml', 'image/jpeg');
  // 			callback(imgVariable);
  // 		};
  // 		reader.readAsDataURL(xhr.response);
  // 	};
  // 	xhr.open('GET', url);
  // 	xhr.send();
  // };

  footer(doc, pageNumber, totalPages) {

    let str = "Page " + pageNumber + " of " + totalPages

    doc.setFontSize(10);
    doc.text(str, this.margins.left, doc.internal.pageSize.height - 20);

  };

}
