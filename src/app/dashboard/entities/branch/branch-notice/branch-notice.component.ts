import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, FormControlName } from '@angular/forms';
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';


export interface DialogData {
  class: string,
  subject: string,
  iss_date: Date, // Issue date
  sub_date: Date, // submission date
  title: string,
  description: string
}


@Component({
  selector: 'app-branch-notice',
  templateUrl: './branch-notice.component.html',
  styleUrls: ['./branch-notice.component.css']
})
export class BranchNoticeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(NoticeFormDialog, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  onDeleteNotice(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: 'auto',
      data: {}
    });
  }
  
  ngOnInit() {
  }

}

export interface classNoticeList {
  value: string;
  viewValue: string;
}

// Add time table form dialog box
@Component({
  selector: 'dialog-notice',
  templateUrl: 'notice.form.html',
  styleUrls: ['notice.form.css']
})
export class NoticeFormDialog implements OnInit {
  date = new FormControl(new Date());
  constructor(
    public dialogRef: MatDialogRef<NoticeFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    classNotice = new FormControl();

    // classNoticeList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    Classsbj: classNoticeList[] = [
      {value: 'allclass', viewValue: 'All class'},
      {value: '8-a-div', viewValue: '8 (A Div)'},
      {value: '8-b-div', viewValue: '8 (B Div)'},
      {value: '9-a-div', viewValue: '9 (A Div)'},
      {value: '9-b-div', viewValue: '9 (B Div)'},
      {value: '10-a-div', viewValue: '10 (A Div)'},
      {value: '10-b-div', viewValue: '10 (B Div)'},
      {value: '11-sci-maths-yellow-m', viewValue: '11 Sci Maths (Yellow M)'},
      {value: '11-sci-maths-blue-m', viewValue: '11 Sci Maths (Blue M)'},
      {value: '11-sci-bio-purple-b', viewValue: '11 Sci Bio (Purple B)'},
      {value: '11-sci-bio-green-b', viewValue: '11 Sci Bio (Green B)'},
      {value: '12-sci-maths-golden-m', viewValue: '12 Sci Maths (Golden M)'},
      {value: '12-sci-maths-red-m', viewValue: '12 Sci Maths (Red M)'},
      {value: '12-sci-bio-silver-m', viewValue: '12 Sci Bio (Silver M)'},
      {value: '12-sci-bio-pink-m', viewValue: '12 Sci Bio (Pink M)'}
    ];

  onCancel(): void {
    this.dialogRef.close();
  }

  addNoticeForm: FormGroup;



  ngOnInit() {
    this.addNoticeForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      classNotice: new FormControl (null, {
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }
}