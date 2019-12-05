import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  title: string;
  fromdate: string;
  status: string;
  leavedays: number;
  reason: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
{title: 'Sick Leave', fromdate: '5/12/2019 - 8/12/2019', status: 'Approved', leavedays: 4, reason: 'High Fever and Cold' },
{title: 'Sick Leave', fromdate: '5/12/2019 - 8/12/2019', status: 'Approved', leavedays: 4, reason: 'High Fever and Cold' },
{title: 'Sick Leave', fromdate: '5/12/2019 - 8/12/2019', status: 'Approved', leavedays: 4, reason: 'High Fever and Cold' },
];

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['title', 'fromdate', 'status', 'leavedays', 'reason'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}

