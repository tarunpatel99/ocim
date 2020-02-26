import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { PrintService } from 'src/app/dashboard/printservice/print.service';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {
  chart: any;
  constructor(private PrintService: PrintService) { }

  ngOnInit() {
    this.chart = new Chart('myChart', {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['7th', '8th', '10t', '11th Science', '11th Commerce', '12th Science', '12th Commerce'],
        datasets: [{
          label: "Today' attendance",
          backgroundColor: '#673AB7',
          data: [58, 75, 76, 65, 87, 50, 67],
          borderWidth: 1
        }]
      },

      // Configuration options go here
      options: {
        scales: {
          yAxes: [
            {
              // scaleLabel: {
              //   display: true,
              //   labelString: '0'
              // },
              stacked: true,
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
              }

            }
          ]
        }
      }
    });
  }

  printOut(id: string) {
    this.PrintService.generateGraphicalReport(id, 'Faculty Report')
  }

}
