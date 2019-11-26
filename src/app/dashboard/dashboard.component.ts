import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role = "owner"
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      var winHeight = $(window).outerHeight();
      var navheight = $('.nav').outerHeight();

      $('.content').css('height', winHeight - navheight - 42 + 'px');
    });
  }

}
