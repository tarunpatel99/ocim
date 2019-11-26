import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    BranchComponent,
    FacultyComponent,
    StudentComponent,
    InstituteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
