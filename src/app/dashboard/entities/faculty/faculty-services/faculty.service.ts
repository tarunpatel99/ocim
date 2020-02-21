import { Injectable } from '@angular/core';
import { TaskWorkData, classData } from "../faculty.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  // task and work data
  classNames: classData[] = [
    {
      id: 'hdjsdfsafmf',
      name: "9th",
      subjects: [
        {
          name: "Maths",
          tasks: [
            {
              iss_date: new Date(2019, 13, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Unit 2, Exersice 12",
              description: "Do whole exersice accept que 2."
            }
          ]
        },
        {
          name: "Science",
          tasks: []
        }
      ]
    },
    {
      id: 'fdsfdaga',
      name: "10th",
      subjects: [
        {
          name: "Maths",
          tasks: [
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
          ]
        },

      ]
    },
    {
      id: 'fhuwahdfk',
      name: "11th Commerce",
      subjects: [
        {
          name: "Statistics",
          tasks: []
        },
        {
          name: "Accountancy ",
          tasks: [
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
          ]
        },
        {
          name: "English",
          tasks: []
        }
      ]
    },
    {
      id: 'fhfsiadhjfl',
      name: "11th Science",
      subjects: [
        {
          name: "English",
          tasks: []
        }
      ]
    },
    {
      id: 'fhsjadkfjf',
      name: "12th Commerce",
      subjects: [
        {
          name: "Statistics",
          tasks: []
        },
        {
          name: "Accountancy ",
          tasks: [
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(1)",
              description: "Sample description of task and work(1)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(2)",
              description: "Sample description of task and work(2)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(3)",
              description: "Sample description of task and work(3)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(4)",
              description: "Sample description of task and work(5)"
            },
            {
              iss_date: new Date(2019, 12, 25),
              sub_date: new Date(2019, 12, 26),
              title: "Sample Title(6)",
              description: "Sample description of task and work(6)"
            },
          ]
        },
        {
          name: "English",
          tasks: []
        }
      ]
    },
    {
      id: 'fhjsdkakfgf',
      name: "12th Science",
      subjects: [
        {
          name: "English",
          tasks: []
        }
      ]
    },
  ]
  constructor() { }
  private tasksUpdated = new Subject<classData[]>();
  // ---------------------------- task and work ----------------------------
  // get task
  getTask() {
    return [...this.classNames];
  }

  // update listener
  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable()
    console.log('getTaskUpdateListener() function is working')
  }

  // add task and work
  addTask(task: classData) {
    this.classNames.push(task)
    this.tasksUpdated.next([...this.classNames]);
    console.log(this.getTask())
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
