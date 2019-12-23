import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-student-task-work',
  templateUrl: './student-task-work.component.html',
  styleUrls: ['./student-task-work.component.css']
})
export class StudentTaskWorkComponent implements OnInit {

  constructor() {
    
   }
   stopics: string[] = ['Exercise 1 of Chapter 1', 'Diagrams of Chapter 1'];
   mtopics: string[] = ['Exercise 1 of Chapter 1', 'Exercise 1 of Chapter 2'];
  ngOnInit() {
  }

}
