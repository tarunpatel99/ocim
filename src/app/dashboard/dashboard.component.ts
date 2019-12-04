import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import * as $ from 'jquery';
import { StudentService } from "../student.service";
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  componentName = ""


  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private StudentService: StudentService,
    private AuthService: AuthService,
    private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    const currentNav = this.router.url;
    if (currentNav == "/") {
      if (this.AuthService.role == 'Admin') {
        this.router.navigate(['admin-dashboard'])
      }
      if (this.AuthService.role == 'Owner') {
        this.router.navigate(['institute-dashboard'])
      }
      if (this.AuthService.role == 'Branch Manager') {
        this.router.navigate(['branch-dashboard'])
      }
      if (this.AuthService.role == 'Faculty') {
        this.router.navigate(['faculty-dashboard'])
      }
      if (this.AuthService.role == 'Student') {
        this.router.navigate(['student-dashboard'])
      }
    }

    $(document).ready(function () {
      var winHeight = $(window).outerHeight();
      var navheight = $('.nav').outerHeight();
      var spaceFillerHeight = $('.space-filler').outerHeight();
      var profileBoxHieght = $('.profile').outerHeight();
      $('.content').css('height', winHeight - navheight - 40 + 'px');
      $('.mat-nav-list').css('height', winHeight - navheight - spaceFillerHeight -profileBoxHieght - 28 + 'px');
    });
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getComponentName(name: string) {
   this.componentName = name
  }

}
