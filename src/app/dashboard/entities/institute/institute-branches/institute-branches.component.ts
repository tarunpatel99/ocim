import { Component, OnInit ,ViewChild} from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import {FormBuilder, FormGroup, Validators, MaxLengthValidator} from '@angular/forms';
import { PrintService } from 'src/app/dashboard/printservice/print.service';


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
  {branchname: 'House Bopal' , name: 'Haresh Oza', email: 'haresh1976@gmail.com' , phone: '9876543210'},
  {branchname: 'Ghuma' , name: 'Ankti Patel', email: 'pAnkti86@gmail.com' , phone: '8644756557'},
  // {branchname: 'South Bopal' , name: 'Kaushik Prajapti', email: 'kaushik@gmail.com' , phone: '9876543210'},
  // // {branchname: 'Science city' , name: 'Vinay Sureja', email: 'dSureja@gmail.com' , phone: '6845652133'},
  // // {branchname: 'Maninagar' , name: 'Dharmesh Jadeja', email: 'dharmeshj@gmail.com' , phone: '8665645212'},
  // {branchname: 'SBI Bopal' , name: 'Chinmay Bhatt', email: 'bhattChiku@gmail.com' , phone: '6845645102'},
  // {branchname: 'Bapunagar' , name: 'Nirav Kadia', email: 'kNirav@gmail.com' , phone: '7565422388'},
  // {branchname: 'Nerunagar' , name: 'Shivam Patel', email: 'shivampatel@gmail.com' , phone: '8648546217'},
  // {branchname: 'Iscon' , name: 'Shubh Bhatt', email: 'shubhb@gmail.com' , phone: '8456512378'},
  // {branchname: 'Vastrapur' , name: 'Shubham Mevada', email: 'mevadaS@gmail.com' , phone: '9643532123'}
];


@Component({
  selector: 'app-institute-branches',
  templateUrl: './institute-branches.component.html',
  styleUrls: ['./institute-branches.component.css']
})
export class InstituteBranchesComponent implements OnInit {
  base_url
  firstFormGroup: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  pnum = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10)
  ]);
  pass = new FormControl('', [
    Validators.required
  ]);
  npass = new FormControl('', [
    Validators.required
  ]);

  branchList = []
  Branch_Data = [
    {branchname: 'House Bopal' , name: 'Haresh Oza', email: 'haresh1976@gmail.com' , phone: '9876543210'},
    {branchname: 'Ghuma' , name: 'Ankti Patel', email: 'pAnkti86@gmail.com' , phone: '8644756557'},
    // {branchname: 'South Bopal' , name: 'Kaushik Prajapti', email: 'kaushik@gmail.com' , phone: '9876543210'},
    // {branchname: 'Science city' , name: 'Vinay Sureja', email: 'dSureja@gmail.com' , phone: '6845652133'},
    // {branchname: 'Maninagar' , name: 'Dharmesh Jadeja', email: 'dharmeshj@gmail.com' , phone: '8665645212'},
    // {branchname: 'SBI Bopal' , name: 'Chinmay Bhatt', email: 'bhattChiku@gmail.com' , phone: '6845645102'},
    // {branchname: 'Bapunagar' , name: 'Nirav Kadia', email: 'kNirav@gmail.com' , phone: '7565422388'},
    // {branchname: 'Nerunagar' , name: 'Shivam Patel', email: 'shivampatel@gmail.com' , phone: '8648546217'},
    // {branchname: 'Iscon' , name: 'Shubh Bhatt', email: 'shubhb@gmail.com' , phone: '8456512378'},
    // {branchname: 'Vastrapur' , name: 'Shubham Mevada', email: 'mevadaS@gmail.com' , phone: '9643532123'},
  ];
  constructor(private PrintService: PrintService) {
    for (let i = 0; i < this.Branch_Data.length; i++) {
      if (!this.branchList.includes(this.Branch_Data.map(branchname => branchname.branchname)[i]))
        this.branchList.push(this.Branch_Data.map(branchname => branchname.branchname)[i])
    }
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.Branch_Data);
  }

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
    this.firstFormGroup = new FormGroup({
      fname: new FormControl(null, {
        validators: [Validators.required]
      }),
      lname: new FormControl(null, {
        validators: [Validators.required]
      }),
      address: new FormControl(null, {
        validators: [Validators.required]
      }),
      bname: new FormControl(null, {
        validators: [Validators.required]
      }),
      state: new FormControl(null, {
        validators: [Validators.required]
      }),
      city: new FormControl(null, {
        validators: [Validators.required]
      }),
      pcode: new FormControl(null, {
        validators: [Validators.required]
      }),
      gender: new FormControl(null, {
        validators: [Validators.required]
      }),
      });
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
    let columns: string[] = ['branchname', 'name', 'email', 'phone'];

    // this.PrintService.generateReport(data, columns, pdftitle)
    this.PrintService.generateReport(this.dataSource.filteredData, columns, 'Branch Details')
  }

}
