import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { studentThemeColors } from "../../models/color.model";
import { PrintService } from 'src/app/dashboard/printservice/print.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  studentdash = new studentThemeColors()
  constructor(private PrintService: PrintService) { }
  chart: any;
  result: any

  ngOnInit() {this.chart = new Chart('myChart', {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['English', 'Science', 'Maths', 'Social Studies'],
      datasets: [{
        label: 'Attendance',
        backgroundColor: '#673AB7',
        data: [67, 80, 80, 75],
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

  this.result = new Chart('myresult', {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Maths', 'Science', 'English', 'Hindi','Social Studies'],
      datasets: [{
        label: 'Unit Test 1',
        backgroundColor: '#00796B',
        data: [45, 45, 44, 35, 49],
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
  this.PrintService.generateGraphicalReport(id, 'Attendance')
}
}
