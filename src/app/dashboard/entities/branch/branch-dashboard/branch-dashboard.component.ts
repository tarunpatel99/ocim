import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-branch-dashboard',
  templateUrl: './branch-dashboard.component.html',
  styleUrls: ['./branch-dashboard.component.css']
})
export class BranchDashboardComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2017', '2018', '2019'],
        datasets: [{
          label: 'Students',
          backgroundColor: '#673AB7',
          data: [27, 10, 5, 2, 20, 30, 45, 35, 50, 67],
          borderWidth: 1
        }]
      },

      // Configuration options go here
      options: {
        //   legend: {
        //     labels: {
        //         // This more specific font property overrides the global property
        //         fontSize: '24'
        //     }
        // }
      }
    });
  }

}
