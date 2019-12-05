import { Component, OnInit } from '@angular/core';


export interface Class {
  value: string;
  viewValue: string;
}

export interface Subject {
  value: string;
  viewValue: string;
}

export interface City {
  value: string;
  viewValue: string;
}

export interface State {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-branch-students',
  templateUrl: './branch-students.component.html',
  styleUrls: ['./branch-students.component.css']
})
export class BranchStudentsComponent implements OnInit {

  constructor() { }

  classes: Class[] = [
    {value: '11-sci-maths', viewValue: '11 Sci Maths'},
    {value: '11-sci-bio', viewValue: '11 Sci Bio'},
    {value: '12-sci-maths', viewValue: '12 Sci Maths'},
    {value: '12-sci-bio', viewValue: '12 Sci Bio'}
  ];

  subjects: Subject[] = [
    {value: 'maths', viewValue: 'Maths'},
    {value: 'bio', viewValue: 'Bio'},
    {value: 'physics', viewValue: 'Physics'},
    {value: 'chemistry', viewValue: 'Chemistry'},
    {value: 'english', viewValue: 'English'},
    {value: 'computer', viewValue: 'Computer'}
  ];

  cities: City[] = [
    {value: 'Ahmedabad', viewValue: 'Ahmedabad'},
    {value: 'Rajkot', viewValue: 'Rajkot'}
  ];

  states: State[] = [
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Maharastra', viewValue: 'Maharastra'}
  ];
  
  ngOnInit() {
  }

}
