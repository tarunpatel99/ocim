import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  class: string,
  subject: string,
  iss_date: Date, // Issue date
  sub_date: Date, // submission date
  title: string,
  description: string
}


@Component({
  selector: 'app-institute-notice',
  templateUrl: './institute-notice.component.html',
  styleUrls: ['./institute-notice.component.css']
})
export class InstituteNoticeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // open dialog box
  openForm(): void {
    const dialogRef = this.dialog.open(NoticeByIOFormDialog, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  tabs = ['Common', 'House Bopal', 'Ghuma' , 'South Bopal' , 'SBI Bopal' , 'Science city'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
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
  selector: 'dialog-noticebyio',
  templateUrl: 'noticebyio.form.html',
  styleUrls: ['noticebyio.form.css']
})
export class NoticeByIOFormDialog {
  date = new FormControl(new Date());
  applynotice: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<NoticeByIOFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onSave(): void {
      if (this.applynotice.invalid) {
        return;
      }
    }
    onCancel(): void {
      this.dialogRef.close();
    }
    
    classNotice = new FormControl(null, {
      validators: [Validators.required]
    });
    
    ngOnInit(){
      this.applynotice = new FormGroup({
        title: new FormControl(null, {
          validators: [Validators.required]
        }),
        desc: new FormControl(null, {
          validators: [Validators.required]
        }),
        class: new FormControl(null, {
          validators: [Validators.required]
        }),
      });
    }

    // classNoticeList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    Classsbj: classNoticeList[] = [
      {value: 'All', viewValue: 'All'},
      {value: 'House Bopal', viewValue: 'House Bopal'},
      {value: 'Ghuma', viewValue: 'Ghuma'},
      {value: 'South Bopal', viewValue: 'South Bopal'},
      {value: 'SBI Bopal', viewValue: 'SBI Bopal'},
      {value: 'Science city', viewValue: 'Science city'},
      {value: 'Maninagar', viewValue: 'Maninagar'},
      {value: 'Bapunagar', viewValue: 'Bapunagar'},
      {value: 'Nerunagar', viewValue: 'Nerunagar'},
      {value: 'Iscon', viewValue: 'Iscon'},
      {value: 'Vastrapur', viewValue: 'Vastrapur'},
    ];

  onAddtimetable(): void { }

}