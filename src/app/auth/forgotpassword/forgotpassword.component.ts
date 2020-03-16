import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { element } from 'protractor';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotForm: FormGroup;
  


  constructor() { }

  ngOnInit() {


  // form validation
  this.forgotForm = new FormGroup({
    email: new FormControl(null, {
      validators: [Validators.required]
    })
    // password:new FormControl(null, {
    //   validators: [Validators.required]
    // }),
    // confirmpassword:new FormControl(null, {
    //   validators: [Validators.required]
    // }),
});
}
}
