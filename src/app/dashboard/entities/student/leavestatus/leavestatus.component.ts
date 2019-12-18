import { Component, OnInit } from '@angular/core';

export interface Attatchment {
  id: string
}

export interface LeaveNote {
  id: string,
  class: string,
  studentName: string,
  subject: string,
  description: string,
  leaveFrom: string,
  leaveTo: string,
  attatchment: Array<Attatchment>,
  status: string
}


@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

