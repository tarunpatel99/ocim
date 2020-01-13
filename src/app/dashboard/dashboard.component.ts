import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import * as $ from 'jquery';
import { StudentService } from "../student.service";
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { OverlayContainer } from '@angular/cdk/overlay';

export class User {
  username?: string;
  password?: string;
  role: string
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  username = 'Not Assigned'
  role: any

  private _mobileQueryListener: () => void;
  currentUser: User;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private StudentService: StudentService,
    private AuthService: AuthService,
    private router: Router,
    overlayContainer: OverlayContainer
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    switch (this.currentUser.role) {
      case 'Admin':
        overlayContainer.getContainerElement().classList.add('admin-theme');
      case 'Owner':
        overlayContainer.getContainerElement().classList.add('owner-theme');
      case 'Branch Manager':
        overlayContainer.getContainerElement().classList.add('bm-theme');
      case 'Faculty':
        overlayContainer.getContainerElement().classList.add('faculty-theme');
      case 'Student':
        overlayContainer.getContainerElement().classList.add('student-theme');
      default:
        overlayContainer.getContainerElement().classList.add('owner-theme');
    }
  }

  onLogout() {
    this.AuthService.logout()
  }

  ngOnInit() {
    this.AuthService.navigateUser()
    this.username = this.currentUser.username;
    this.role = this.currentUser.role;

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

}
