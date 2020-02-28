import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { PrintService } from 'src/app/dashboard/printservice/print.service';

@Component({
  selector: 'app-institute-dashboard',
  templateUrl: './institute-dashboard.component.html',
  styleUrls: ['./institute-dashboard.component.css']
})
export class InstituteDashboardComponent implements OnInit {
  chart: any;

  constructor(private PrintService: PrintService) { }

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
          data: [0, 10, 5, 2, 20, 30, 45, 35, 50, 67],
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
  printOut(id: string) {
    this.PrintService.generateGraphicalReport(id, 'Students')
  }
}
