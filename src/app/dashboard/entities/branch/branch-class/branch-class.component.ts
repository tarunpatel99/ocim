import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

export interface Class {
  value: string;
  viewValue: string;
}

export interface Classsbj {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-branch-class',
  templateUrl: './branch-class.component.html',
  styleUrls: ['./branch-class.component.css']
})
export class BranchClassComponent implements OnInit {
  constructor() { }


  // panelOpenState = false;


  classes: Class[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' },
    { value: '11-sci-maths', viewValue: '11 Sci Maths' },
    { value: '11-sci-bio', viewValue: '11 Sci Bio' },
    { value: '12-sci-maths', viewValue: '12 Sci Maths' },
    { value: '12-sci-bio', viewValue: '12 Sci Bio' },
    { value: '11-commerce', viewValue: '11 Commerce' },
    { value: '12-commerce', viewValue: '12 Commerce' },
    { value: '11-arts', viewValue: '11 Arts' },
    { value: '12-arts', viewValue: '12 Arts' },
    { value: 'other', viewValue: 'Custom' },
  ];

  classsbjs: Classsbj[] = [
    { value: '8-a-div', viewValue: '8 (A Div)' },
    { value: '8-b-div', viewValue: '8 (B Div)' },
    { value: '9-a-div', viewValue: '9 (A Div)' },
    { value: '9-b-div', viewValue: '9 (B Div)' },
    { value: '10-a-div', viewValue: '10 (A Div)' },
    { value: '10-b-div', viewValue: '10 (B Div)' },
    { value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)' },
    { value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)' },
    { value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)' },
    { value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)' },
    { value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)' },
    { value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)' },
    { value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)' },
    { value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)' }
  ];

  // typesOfStandards: string[] = ['8 (A Div)', '8 (B Div)', '9 (A Div)', '9 (B Div)', '10 (A Div)', '10 (B Div)', 
  //                               '11 Sci Maths (Yellow M)','11 Sci Maths (Blue M)', '11 Sci Bio (Purple B)', '11 Sci Bio (Green B)',
  //                               '12 Sci Maths (Golden M)', '12 Sci Maths (Red M)', '12 Sci Bio (Silver M)', '12 Sci Bio (Pink M)'];


  // typesOfSubjects: string[] = ['8 (A Div)', '8 (B Div)', '9 (A Div)', '9 (B Div)', '10 (A Div)', '10 (B Div)', 
  //                               '11 Sci Maths (Yellow M)','11 Sci Maths (Blue M)', '11 Sci Bio (Purple B)', '11 Sci Bio (Green B)',
  //                               '12 Sci Maths (Golden M)', '12 Sci Maths (Red M)', '12 Sci Bio (Silver M)', '12 Sci Bio (Pink M)'];

  eights: string[] = ['Science', 'Maths', 'Social Science', 'English']
  nines: string[] = ['Science', 'Maths', 'Social Science', 'English']
  tens: string[] = ['Science', 'Maths', 'Social Science', 'English']
  scim: string[] = ['Physics', 'Maths', 'Chemistry']
  scib: string[] = ['Physics', 'Chemistry', 'Biology']


  addClassForm: FormGroup;
  addSubjectForm: FormGroup;

  onSave(): void {
    // console.log("Form Submitted!");
    if (this.addClassForm.invalid) {
      return;
    }
    if (this.addSubjectForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.addClassForm = new FormGroup({
      standard: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
    this.addSubjectForm = new FormGroup({
      class: new FormControl(null, {
        validators: [Validators.required]
      }),
      subjectname: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }
}