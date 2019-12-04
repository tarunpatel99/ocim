import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import * as $ from 'jquery';
import { StudentService } from "../student.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;



  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private StudentService: StudentService,
    private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    const currentNav = this.router.url;
    if (currentNav == "/") {
      if (this.StudentService.role == 'Admin') {
        this.router.navigate(['admin-dashboard'])
      }
      if (this.StudentService.role == 'Owner') {
        this.router.navigate(['institute-dashboard'])
      }
      if (this.StudentService.role == 'Branch Manager') {
        this.router.navigate(['branch-dashboard'])
      }
      if (this.StudentService.role == 'Faculty') {
        this.router.navigate(['faculty-dashboard'])
      }
      if (this.StudentService.role == 'Student') {
        this.router.navigate(['student-dashboard'])
      }
    }

    $(document).ready(function () {
      var winHeight = $(window).outerHeight();
      var navheight = $('.nav').outerHeight();
      var spaceFillerHeight = $('.space-filler').outerHeight();
      var profileBoxHieght = $('.profile').outerHeight();
      $('.content').css('height', winHeight - navheight - 2 + 'px');
      $('.mat-nav-list').css('height', winHeight - navheight - spaceFillerHeight -profileBoxHieght - 30 + 'px');
    });
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
