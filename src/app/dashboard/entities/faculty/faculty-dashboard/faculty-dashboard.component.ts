import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {
  chart: any;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sup', 'Oct'],
        datasets: [{
          label: 'Institutes Registerd',
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

}
