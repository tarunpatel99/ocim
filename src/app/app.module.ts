import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "./material.module";
// import { FormControl } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
 
//firebase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { environment } from '../environments/environment';

//COMPONENT
//import { SignupComponent } from './auth/signup/signup.component';
//import { LoginComponent } from './auth/login/login.component';
//import { DemoComponent,rusuredialog } from './demo/demo.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './dashboard/entities/admin/admin.component';
import { BranchComponent } from './dashboard/entities/branch/branch.component';
import { FacultyComponent } from './dashboard/entities/faculty/faculty.component';
import { StudentComponent } from './dashboard/entities/student/student.component';
import { InstituteComponent } from './dashboard/entities/institute/institute.component';
import { AdminDashboardComponent } from './dashboard/entities/admin/admin-dashboard/admin-dashboard.component';
import { AdminInstitutesComponent } from './dashboard/entities/admin/admin-institutes/admin-institutes.component';
import { AdminPaymentComponent } from './dashboard/entities/admin/admin-payment/admin-payment.component';
import { AdminFeedbackComponent } from './dashboard/entities/admin/admin-feedback/admin-feedback.component';
import { AdminProfileComponent } from './dashboard/entities/admin/admin-profile/admin-profile.component';
import { InstituteDashboardComponent } from './dashboard/entities/institute/institute-dashboard/institute-dashboard.component';
import { InstituteBranchesComponent } from './dashboard/entities/institute/institute-branches/institute-branches.component';
import { InstituteNoticeComponent ,NoticeByIOFormDialog } from './dashboard/entities/institute/institute-notice/institute-notice.component';
import { InstitutePaymentsComponent } from './dashboard/entities/institute/institute-payments/institute-payments.component';
import { InstituteProfileComponent } from './dashboard/entities/institute/institute-profile/institute-profile.component';
import { InstituteFeedbackComponent } from './dashboard/entities/institute/institute-feedback/institute-feedback.component';
import { BranchDashboardComponent } from './dashboard/entities/branch/branch-dashboard/branch-dashboard.component';
import { BranchTimetableComponent, TimeTableFormDialog } from './dashboard/entities/branch/branch-timetable/branch-timetable.component';
import { ViewTimetableComponent } from './dashboard/entities/branch/branch-timetable/view-timetable/view-timetable.component';
import { BranchAttendanceComponent } from './dashboard/entities/branch/branch-attendance/branch-attendance.component';
import { BranchClassComponent } from './dashboard/entities/branch/branch-class/branch-class.component';
import { BranchExamScheduleComponent, ViewScheduleFormDialog } from './dashboard/entities/branch/branch-exam-schedule/branch-exam-schedule.component';
import { BranchExamResultComponent } from './dashboard/entities/branch/branch-exam-result/branch-exam-result.component';
import { BranchNoticeComponent, NoticeFormDialog } from './dashboard/entities/branch/branch-notice/branch-notice.component';
import { BranchLeaveNotesComponent, LeaveNoteFormDialog } from './dashboard/entities/branch/branch-leave-notes/branch-leave-notes.component';
import { BranchStudentsComponent } from './dashboard/entities/branch/branch-students/branch-students.component';
import { BranchFeesComponent , announcementFormDialog} from './dashboard/entities/branch/branch-fees/branch-fees.component';
import { BranchProfileComponent } from './dashboard/entities/branch/branch-profile/branch-profile.component';
import { FacultyDashboardComponent } from './dashboard/entities/faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyTimeTableComponent } from './dashboard/entities/faculty/faculty-time-table/faculty-time-table.component';
import { ViewTimeTableComponent } from './dashboard/entities/faculty/faculty-time-table/view-time-table/view-time-table.component'; // view time table dialog
import { FacultyAttendanceComponent } from './dashboard/entities/faculty/faculty-attendance/faculty-attendance.component';
import { FacultyTaskWorkComponent, TaskWorkFormDialog } from './dashboard/entities/faculty/faculty-task-work/faculty-task-work.component';
import { FacultySyllabusComponent, SyllabusFormDialog } from './dashboard/entities/faculty/faculty-syllabus/faculty-syllabus.component';
import { FacultyExamScheduleComponent } from './dashboard/entities/faculty/faculty-exam-schedule/faculty-exam-schedule.component';
import { FacultyExamResultComponent } from './dashboard/entities/faculty/faculty-exam-result/faculty-exam-result.component';
import { FacultyNoticeComponent } from './dashboard/entities/faculty/faculty-notice/faculty-notice.component';
import { FacultyLeaveNoteComponent, LeaveNoteViewDialog } from './dashboard/entities/faculty/faculty-leave-note/faculty-leave-note.component';
import { FacultyProfileComponent } from './dashboard/entities/faculty/faculty-profile/faculty-profile.component';
import { StudentProfileComponent } from './dashboard/entities/student/student-profile/student-profile.component';
import { StudentFeesComponent } from './dashboard/entities/student/student-fees/student-fees.component';
import { StudentLeaveNoteComponent, ApplyLeave, actiondialog } from './dashboard/entities/student/student-leave-note/student-leave-note.component';
import { StudentNoticeComponent } from './dashboard/entities/student/student-notice/student-notice.component';
import { StudentExamResultComponent } from './dashboard/entities/student/student-exam-result/student-exam-result.component';
import { StudentExamScheduleComponent } from './dashboard/entities/student/student-exam-schedule/student-exam-schedule.component';
import { StudentSyllabusComponent } from './dashboard/entities/student/student-syllabus/student-syllabus.component';
import { StudentTaskWorkComponent } from './dashboard/entities/student/student-task-work/student-task-work.component';
import { StudentAttendanceComponent } from './dashboard/entities/student/student-attendance/student-attendance.component';
import { StudentTimetableComponent } from './dashboard/entities/student/student-timetable/student-timetable.component';
import { StudentDashboardComponent } from './dashboard/entities/student/student-dashboard/student-dashboard.component';
import { StudentService } from './dashboard/entities/student/student.service';
import { AuthService } from './auth/auth.service';
import { BranchFacultiesComponent } from './dashboard/entities/branch/branch-faculties/branch-faculties.component';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteComponent } from './dashboard/entities/confirm-delete/confirm-delete.component';
import { EditResultMarkComponent } from './dashboard/entities/branch/branch-exam-result/edit-result-mark/edit-result-mark.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { PrintService } from './dashboard/printservice/print.service';
import { FacultyService } from './dashboard/entities/faculty/faculty-services/faculty.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    AdminComponent,
    BranchComponent,
    FacultyComponent,
    StudentComponent,
    InstituteComponent,
    AdminDashboardComponent,
    AdminInstitutesComponent,
    AdminPaymentComponent,
    AdminFeedbackComponent,
    AdminProfileComponent,
    InstituteDashboardComponent,
    InstituteBranchesComponent,
    InstituteNoticeComponent,
    NoticeByIOFormDialog,
    InstitutePaymentsComponent,
    InstituteProfileComponent,
    InstituteFeedbackComponent,
    BranchDashboardComponent,
    BranchTimetableComponent,
    TimeTableFormDialog, //add/edit time table dialog box
    ViewTimetableComponent, //view dialogbox
    BranchAttendanceComponent,
    BranchClassComponent,
    BranchExamScheduleComponent,
    ViewScheduleFormDialog,//dialog
    BranchExamResultComponent,
    BranchNoticeComponent,
    NoticeFormDialog, //add/edit notice dialog box
    BranchLeaveNotesComponent,
    LeaveNoteFormDialog, //accept and reject leave
    BranchStudentsComponent,
    BranchFeesComponent, 
    announcementFormDialog, //add annoncemenet dialog box
    BranchProfileComponent,
    FacultyDashboardComponent,
    FacultyTimeTableComponent,
    ViewTimeTableComponent, //faculty
    FacultyAttendanceComponent,
    FacultyTaskWorkComponent,
    TaskWorkFormDialog, // add/edit task and work dialog box
    FacultySyllabusComponent,
    SyllabusFormDialog,
    FacultyExamScheduleComponent,
    FacultyExamResultComponent,
    FacultyNoticeComponent,
    FacultyLeaveNoteComponent,
    LeaveNoteViewDialog, //  view leave note dialog box
    FacultyProfileComponent,
    StudentProfileComponent,
    StudentFeesComponent,
    StudentLeaveNoteComponent,
    StudentNoticeComponent,
    StudentExamResultComponent,
    StudentExamScheduleComponent,
    StudentSyllabusComponent,
    StudentTaskWorkComponent,
    StudentAttendanceComponent,
    StudentTimetableComponent,
    StudentDashboardComponent,
    BranchFacultiesComponent,
    ApplyLeave, // leave dialog,
    actiondialog, 
    ConfirmDeleteComponent, 
    EditResultMarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    OverlayModule
  ],
  entryComponents: [
    // dialog boxes
    TaskWorkFormDialog,
    TimeTableFormDialog,
    announcementFormDialog,
    ViewTimetableComponent, //branch
    EditResultMarkComponent,
    NoticeByIOFormDialog,
    ViewScheduleFormDialog,//branch
    NoticeFormDialog,
    LeaveNoteFormDialog,
    LeaveNoteViewDialog,
    ViewTimeTableComponent, //faculty
    ApplyLeave,
    actiondialog,
    ConfirmDeleteComponent,
    SyllabusFormDialog
  ],
  providers: [
    StudentService,
    FacultyService,
    AuthService,
    PrintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
