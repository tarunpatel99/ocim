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
  branchname: string;
  name: string;
  email: string;
  phone: string;
}

const Branch_Data: Branch_element[] = [
  {branchname: 'House Bopal' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Ghuma' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'South Bopal' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Science city' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Maninagar' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'SBI Bopal' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Bapunagar' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Nerunagar' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Iscon' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
  {branchname: 'Vastrapur' , name: 'Branchmanager Middlename Surname', email: 'branchmngr@gmail.com' , phone: '9876543210'},
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
  


  displayedColumns: string[] = ['branchname','name', 'email', 'phone','action'];
  dataSource = new MatTableDataSource<Branch_element>(Branch_Data);

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
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

}
