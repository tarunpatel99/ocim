import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';


export interface FileData {
  id?: string;
  name: string;
  subject: string;
  class: string;
  uploadDate: Date; // obtain marks from total marks
  ownerName: string; // totla marks
  fileSoureceUrl: string
}

@Component({
  selector: 'app-faculty-syllabus',
  templateUrl: './faculty-syllabus.component.html',
  styleUrls: ['./faculty-syllabus.component.css']
})
export class FacultySyllabusComponent implements OnInit {
  displayedColumns: string[] = ['icons', 'name', 'uploadDate', 'fileOwnerName'];
  dataSource: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  date = new FormControl(new Date());
  constructor() {
    // get student info from local data
    const files = [
      { name: 'Syllabus', subject: 'OSOS', class: "12th Commerce", uploadDate: new Date(2019, 12, 25), ownerName: "Tarun", fileSoureceUrl: "src/assets/timetable.jpg" },
      { name: 'Importance', subject: 'DCB', class: "12th Science", uploadDate: new Date(2019, 12, 24), ownerName: "Shubh", fileSoureceUrl: "src/assets/timetable.jpg" },
      { name: 'Syllabus', subject: 'VB', class: "9th (A)", uploadDate: new Date(2019, 12, 28), ownerName: "Nirav", fileSoureceUrl: "src/assets/timetable.jpg" },
      { name: 'Syllabus', subject: 'VB(p)', class: "8th (B)", uploadDate: new Date(2019, 12, 19), ownerName: "Shubham", fileSoureceUrl: "src/assets/timetable.jpg" },
      { name: 'Task', subject: 'DBMS', class: "12th Commerce", uploadDate: new Date(2019, 12, 17), ownerName: "Harshil", fileSoureceUrl: "src/assets/timetable.jpg" },
      { name: 'Ques', subject: 'C++', class: "11th Science", uploadDate: new Date(2019, 12, 7), ownerName: "Aakash", fileSoureceUrl: "src/assets/timetable.jpg" }
    ]

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(files);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDownloadSyllabus(url: string) {
    console.log(url)
   }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
