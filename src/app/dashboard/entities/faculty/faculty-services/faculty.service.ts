import { Injectable } from '@angular/core';
import { DialogData } from "../faculty.model";

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor() { }

  // ---------------------------- task and work ----------------------------
  // get task
  getTask() {
    console.log('getTask() function is working')
  }

  // update listener
  getTaskUpdateListener() {
    console.log('getTaskUpdateListener() function is working')
  }

  // add task and work
  addTask() {
    console.log('addTask() function is working')
  }

  // update task and work
  updateTask() {
    console.log('updateTask() function is working')
  }

  // delete task and work
  deleteTask() {
    console.log('deleteTask() function is working')
  }
}
