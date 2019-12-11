import { Component, OnInit ,ViewChild} from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';


export interface City {
  value: string;
  viewValue: string;
}

export interface State {
  value: string;
  viewValue: string;
}

export interface Branch_element {
  rollno: string;
  name: string;
  class: string;
  phone: string;
}

const Branch_Data: Branch_element[] = [
  {rollno: '19-bio-11', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-12', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-13', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-14', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-15', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-16', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-17', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-18', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-19', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
  {rollno: '19-bio-20', name: 'Branchmanager Middlename Surname', class: '11 Sci Bio' , phone: '9876543210'},
];


@Component({
  selector: 'app-institute-branches',
  templateUrl: './institute-branches.component.html',
  styleUrls: ['./institute-branches.component.css']
})
export class InstituteBranchesComponent implements OnInit {

  constructor() { }

  checked = true;
  
  cities: City[] = [
    {value: 'Ahmedabad', viewValue: 'Ahmedabad'},
    {value: 'Rajkot', viewValue: 'Rajkot'}
  ];

  states: State[] = [
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Maharastra', viewValue: 'Maharastra'}
  ];
  


  displayedColumns: string[] = ['rollno','name', 'class', 'phone','action'];
  dataSource = new MatTableDataSource<Branch_element>(Branch_Data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 




}
