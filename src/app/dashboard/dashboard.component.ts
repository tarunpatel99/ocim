import { Component, OnInit, OnDestroy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import * as $ from 'jquery';
import { StudentService } from "./entities/student/student.service";
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { OverlayContainer } from '@angular/cdk/overlay';

export class User {
  email?: string;
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

  email: any
  role: any

  @HostBinding('class') componentCssClass;

  private _mobileQueryListener: () => void;
  currentUser: User;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private StudentService: StudentService,
    private AuthService: AuthService,
    private router: Router,
    private overlayContainer: OverlayContainer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onLogout() {
    this.AuthService.logout()
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.AuthService.navigateUser()
    this.email = this.currentUser.email;
    this.role = this.currentUser.role;


    $(document).ready(setDashboard); // when page load
    $(window).resize(setDashboard); //  when window resize
    function setDashboard() {
      var winHeight = $(window).outerHeight();
      var navheight = $('.nav').outerHeight();
      var spaceFillerHeight = $('.space-filler').outerHeight();
      var profileBoxHieght = $('.profile').outerHeight();
      $('.content').css('height', winHeight - navheight - 40 + 'px');
      $('.mat-nav-list').css('height', winHeight - navheight - spaceFillerHeight - profileBoxHieght - 28 + 'px');
    }

    switch (this.AuthService.currentuser.role) {
      case 'Admin':
        this.overlayContainer.getContainerElement().classList.add('admin-theme');
        this.componentCssClass = 'admin-theme';
        break;
      case 'Owner':
        this.overlayContainer.getContainerElement().classList.add('owner-theme');
        this.componentCssClass = 'owner-theme';
        break;
      case 'Branch Manager':
        this.overlayContainer.getContainerElement().classList.add('bm-theme');
        this.componentCssClass = 'bm-theme';
        break;
      case 'Faculty':
        this.overlayContainer.getContainerElement().classList.add('faculty-theme');
        this.componentCssClass = 'faculty-theme';
        break;
      case 'Student':
        this.overlayContainer.getContainerElement().classList.add('student-theme');
        this.componentCssClass = 'student-theme';
        break;
    }
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
