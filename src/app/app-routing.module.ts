import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component'
import { AdminDashboardComponent } from './dashboard/entities/admin/admin-dashboard/admin-dashboard.component';
import { AdminFeedbackComponent } from './dashboard/entities/admin/admin-feedback/admin-feedback.component';
import { AdminInstitutesComponent } from './dashboard/entities/admin/admin-institutes/admin-institutes.component';
import { AdminPaymentComponent } from './dashboard/entities/admin/admin-payment/admin-payment.component';
import { AdminProfileComponent } from './dashboard/entities/admin/admin-profile/admin-profile.component';
import { BranchAttendanceComponent } from './dashboard/entities/branch/branch-attendance/branch-attendance.component';
import { BranchClassComponent } from './dashboard/entities/branch/branch-class/branch-class.component';
import { BranchDashboardComponent } from './dashboard/entities/branch/branch-dashboard/branch-dashboard.component';
import { BranchExamResultComponent } from './dashboard/entities/branch/branch-exam-result/branch-exam-result.component';
import { BranchExamScheduleComponent } from './dashboard/entities/branch/branch-exam-schedule/branch-exam-schedule.component';
import { BranchFeesComponent } from './dashboard/entities/branch/branch-fees/branch-fees.component';
import { BranchLeaveNotesComponent } from './dashboard/entities/branch/branch-leave-notes/branch-leave-notes.component';
import { BranchNoticeComponent } from './dashboard/entities/branch/branch-notice/branch-notice.component';
import { BranchProfileComponent } from './dashboard/entities/branch/branch-profile/branch-profile.component';
import { BranchStudentsComponent } from './dashboard/entities/branch/branch-students/branch-students.component';
import { BranchTimetableComponent } from './dashboard/entities/branch/branch-timetable/branch-timetable.component';
import { FacultyAttendanceComponent } from './dashboard/entities/faculty/faculty-attendance/faculty-attendance.component';
import { FacultyExamScheduleComponent } from './dashboard/entities/faculty/faculty-exam-schedule/faculty-exam-schedule.component';
import { FacultyDashboardComponent } from './dashboard/entities/faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyExamResultComponent } from './dashboard/entities/faculty/faculty-exam-result/faculty-exam-result.component';
import { FacultyLeaveNoteComponent } from './dashboard/entities/faculty/faculty-leave-note/faculty-leave-note.component';
import { FacultyNoticeComponent } from './dashboard/entities/faculty/faculty-notice/faculty-notice.component';
import { FacultyProfileComponent } from './dashboard/entities/faculty/faculty-profile/faculty-profile.component';
import { FacultySyllabusComponent } from './dashboard/entities/faculty/faculty-syllabus/faculty-syllabus.component';
import { FacultyTaskWorkComponent } from './dashboard/entities/faculty/faculty-task-work/faculty-task-work.component';
import { FacultyTimeTableComponent } from './dashboard/entities/faculty/faculty-time-table/faculty-time-table.component';
import { InstituteBranchesComponent } from './dashboard/entities/institute/institute-branches/institute-branches.component';
import { InstituteDashboardComponent } from './dashboard/entities/institute/institute-dashboard/institute-dashboard.component';
import { InstituteFeedbackComponent } from './dashboard/entities/institute/institute-feedback/institute-feedback.component';
import { InstituteNoticeComponent } from './dashboard/entities/institute/institute-notice/institute-notice.component';
import { InstitutePaymentsComponent } from './dashboard/entities/institute/institute-payments/institute-payments.component';
import { InstituteProfileComponent } from './dashboard/entities/institute/institute-profile/institute-profile.component';
import { StudentAttendanceComponent } from './dashboard/entities/student/student-attendance/student-attendance.component';
import { StudentDashboardComponent } from './dashboard/entities/student/student-dashboard/student-dashboard.component';
import { StudentExamResultComponent } from './dashboard/entities/student/student-exam-result/student-exam-result.component';
import { StudentExamScheduleComponent } from './dashboard/entities/student/student-exam-schedule/student-exam-schedule.component';
import { StudentFeesComponent } from './dashboard/entities/student/student-fees/student-fees.component';
import { StudentLeaveNoteComponent } from './dashboard/entities/student/student-leave-note/student-leave-note.component';
import { StudentNoticeComponent } from './dashboard/entities/student/student-notice/student-notice.component';
import { StudentProfileComponent } from './dashboard/entities/student/student-profile/student-profile.component';
import { StudentSyllabusComponent } from './dashboard/entities/student/student-syllabus/student-syllabus.component';
import { StudentTaskWorkComponent } from './dashboard/entities/student/student-task-work/student-task-work.component';
import { StudentTimetableComponent } from './dashboard/entities/student/student-timetable/student-timetable.component';
import { BranchFacultiesComponent } from './dashboard/entities/branch/branch-faculties/branch-faculties.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  }, 
  {
    path: 'forgotpassword', component: ForgotpasswordComponent
  },
  {
    path: '', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [

      // admin routing
      {
        path: 'admin-dashboard', component: AdminDashboardComponent
      },
      {
        path: 'admin-feedback', component: AdminFeedbackComponent
      },
      {
        path: 'admin-institute', component: AdminInstitutesComponent
      },
      {
        path: 'admin-payment', component: AdminPaymentComponent
      },
      {
        path: 'admin-profile', component: AdminProfileComponent
      },

      // branch routing
      {
        path: 'branch-attendance', component: BranchAttendanceComponent
      },
      {
        path: 'branch-class', component: BranchClassComponent
      },
      {
        path: 'branch-dashboard', component: BranchDashboardComponent
      },
      {
        path: 'branch-exam-result', component: BranchExamResultComponent
      },
      {
        path: 'branch-exam-schedule', component: BranchExamScheduleComponent
      },
      {
        path: 'branch-fees', component: BranchFeesComponent
      },
      {
        path: 'branch-leave-notes', component: BranchLeaveNotesComponent
      },
      {
        path: 'branch-notice', component: BranchNoticeComponent
      },
      {
        path: 'branch-profile', component: BranchProfileComponent
      },
      {
        path: 'branch-faculty', component: BranchFacultiesComponent
      },
      {
        path: 'branch-student', component: BranchStudentsComponent
      },
      {
        path: 'branch-timetable', component: BranchTimetableComponent
      },

      // faculty routing
      {
        path: 'faculty-attendance', component: FacultyAttendanceComponent
      },
      {
        path: 'faculty-dashboard', component: FacultyDashboardComponent
      },
      {
        path: 'faculty-exam-result', component: FacultyExamResultComponent
      },
      {
        path: 'faculty-exam-schedule', component: FacultyExamScheduleComponent
      },
      {
        path: 'faculty-leave-note', component: FacultyLeaveNoteComponent
      },
      {
        path: 'faculty-notice', component: FacultyNoticeComponent
      },
      {
        path: 'faculty-profile', component: FacultyProfileComponent
      },
      {
        path: 'faculty-syllabus', component: FacultySyllabusComponent
      },
      {
        path: 'faculty-task-work', component: FacultyTaskWorkComponent
      },
      {
        path: 'faculty-time-table', component: FacultyTimeTableComponent
      },

      // institute routing
      {
        path: 'institute-branches', component: InstituteBranchesComponent
      },
      {
        path: 'institute-dashboard', component: InstituteDashboardComponent
      },
      {
        path: 'institute-feedback', component: InstituteFeedbackComponent
      },
      {
        path: 'institute-notice', component: InstituteNoticeComponent
      },
      {
        path: 'institute-payments', component: InstitutePaymentsComponent
      },
      {
        path: 'institute-profile', component: InstituteProfileComponent
      },

      // student routing
      {
        path: 'student-attendance', component: StudentAttendanceComponent
      },
      {
        path: 'student-dashboard', component: StudentDashboardComponent
      },
      {
        path: 'student-exam-result', component: StudentExamResultComponent
      },
      {
        path: 'student-exam-schedule', component: StudentExamScheduleComponent
      },
      {
        path: 'student-fees', component: StudentFeesComponent
      },
      {
        path: 'student-leave-note', component: StudentLeaveNoteComponent
      },
      {
        path: 'student-notice', component: StudentNoticeComponent
      },
      {
        path: 'student-profile', component: StudentProfileComponent
      },
      {
        path: 'student-syllabus', component: StudentSyllabusComponent
      },
      {
        path: 'student-task-work', component: StudentTaskWorkComponent
      },
      {
        path: 'student-time-table', component: StudentTimetableComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
