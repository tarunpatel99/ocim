import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { studentThemeColors } from "../../models/color.model";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  studentdash = new studentThemeColors()
  constructor() { }
  chart: any;
  result: any

  ngOnInit() {this.chart = new Chart('myChart', {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['English', 'Science', 'Maths', 'Social Studies','Hindi','Gujrati','GK'],
      datasets: [{
        label: 'Attendance',
        backgroundColor: '#673AB7',
        data: [67, 80, 80, 75, 0, 100, 88],
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
}
