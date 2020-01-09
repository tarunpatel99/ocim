import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  constructor() { }
  gender="Male"
  ngOnInit() {
  }
  

}
