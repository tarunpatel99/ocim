import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { StudentExamData } from "../faculty.model";
import { ViewScheduleFormDialog } from '../../branch/branch-exam-schedule/branch-exam-schedule.component';
import { ConfirmDeleteComponent } from "../../confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-faculty-exam-schedule',
  templateUrl: './faculty-exam-schedule.component.html',
  styleUrls: ['./faculty-exam-schedule.component.css']
})
export class FacultyExamScheduleComponent implements OnInit {

  students: StudentExamData[] = [
    { title: 'class_test_1', examname: 'Class Test 1', exmdate: '1-1-2020', ttl_marks: 50, passing_mark: 17 },
    { title: 'class_test_2', examname: 'Class Test 2', exmdate: '5-1-2020', ttl_marks: 50, passing_mark: 17 },
    { title: 'class_test_3', examname: 'Class Test 3', exmdate: '11-1-2020', ttl_marks: 50, passing_mark: 17 },
    { title: 'class_test_4', examname: 'Class Test 4', exmdate: '15-1-2020', ttl_marks: 50, passing_mark: 17 },
    { title: 'class_test_5', examname: 'Class Test 5', exmdate: '21-1-2020', ttl_marks: 50, passing_mark: 17 },
    { title: 'class_test_1', examname: 'Class Test 6', exmdate: '25-1-2020', ttl_marks: 100, passing_mark: 33 },
    { title: 'class_test_2', examname: 'Class Test 7', exmdate: '1-2-2020', ttl_marks: 100, passing_mark: 33 },
    { title: 'class_test_3', examname: 'Class Test 8', exmdate: '5-2-2020', ttl_marks: 100, passing_mark: 33 },
    { title: 'class_test_1', examname: 'Class Test 9', exmdate: '11-2-2020', ttl_marks: 100, passing_mark: 33 },
    { title: 'class_test_2', examname: 'Class Test 10', exmdate: '15-2-2020', ttl_marks: 100, passing_mark: 33 },
    { title: 'class_test_3', examname: 'Class Test 11', exmdate: '20-2-2020', ttl_marks: 100, passing_mark: 33 }
  ]

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.students);
  }

  displayedColumns: string[] = ['title', 'examname', 'exmdate', 'ttl_marks', 'passing_mark', 'action'];
  dataSource: MatTableDataSource<StudentExamData>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  date = new FormControl(new Date());

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // filtering data
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  openExamSchedule(): void {
    const dialogRef = this.dialog.open(ViewScheduleFormDialog, {
      width: '600px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: 'fit-content',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }
  

}
