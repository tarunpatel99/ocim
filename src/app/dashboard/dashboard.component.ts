import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import * as $ from 'jquery';
import { StudentService } from "../student.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  role = "owner";
  mobileQuery: MediaQueryList;



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private StudentService: StudentService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
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
