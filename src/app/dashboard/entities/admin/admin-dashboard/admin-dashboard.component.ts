import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { adminThemeColors } from "../../models/color.model";
import { PrintService } from 'src/app/dashboard/printservice/print.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  adminThemeColor = new adminThemeColors()
  constructor(private PrintService: PrintService) { }
  chart: any;

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
  printOut(id: string) {
    this.PrintService.generateGraphicalReport(id, 'Institute Registered')
  }

}
