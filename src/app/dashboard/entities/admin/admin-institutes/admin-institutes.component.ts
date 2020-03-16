import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
import { PrintService } from 'src/app/dashboard/printservice/print.service';

export interface institute {
  id?: String;
  name: string;
  email: string;
  phone: string;
  branches: number;
  faculties: number;
  students: number;
}

@Component({
  selector: 'app-admin-institutes',
  templateUrl: './admin-institutes.component.html',
  styleUrls: ['./admin-institutes.component.css']
})
export class AdminInstitutesComponent implements OnInit {

  institutes: institute[] = [
    { name: 'GyanJyot', email: 'contact@gyanjyot.com', phone: '9999888776', branches: 7, faculties: 50, students: 1500, },
    { name: 'Sandip Patel group tuition', email: 'contact@sp.com', phone: '6778889999', branches: 3, faculties: 32, students: 900, },
    { name: 'Jadeja Tuition classes', email: 'jadeja@gamil.com', phone: '9644534564', branches: 2, faculties: 12, students: 422, },
    { name: 'Sarjak Institute', email: 'contact@sarjak.com', phone: '8354216544', branches: 3, faculties: 22, students: 557, },
    { name: 'Sankte Gruop tuition', email: 'contact@sanket.com', phone: '9745651232', branches: 1, faculties: 12, students: 112, },
  ]

  constructor(private PrintService: PrintService) { }
  displayedColumns: string[] = ['name', 'email', 'phone', 'branches', 'faculties', 'students'];
  dataSource = new MatTableDataSource<institute>(this.institutes);


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

  generateReport() {
    // table column to display in pdf
    let columns: string[] = ['Name', 'Email', 'Phone', 'Branches', 'Faculties', 'Students'];

    // this.PrintService.generateReport(data, columns, pdftitle)
    this.PrintService.generateReport(this.dataSource.filteredData, columns, 'Institutes')
  }

}
