import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
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



//====================================================================================================
//                                        ONLY - MAT - HERE                                         //
//====================================================================================================
//==================================================
//FORM CONTROLS
//==================================================
    //AUTOCOMPLETE
    import {MatAutocompleteModule} from '@angular/material/autocomplete';
    //CHECKBOX
        import {MatCheckboxModule} from '@angular/material/checkbox';
    //DATEPICKER
        import {MatDatepickerModule} from '@angular/material/datepicker';
        import {MatNativeDateModule} from '@angular/material';
    //FORM FIELD
        import {MatFormFieldModule} from '@angular/material/form-field';
    //INPUT
        import {MatInputModule} from '@angular/material/input';
    //RADIO BUTTON
        import {MatRadioModule} from '@angular/material/radio';
    //SELECT
        import {MatSelectModule} from '@angular/material/select';
    //SLIDER
        import {MatSliderModule} from '@angular/material/slider';
    //SLIDE TOGGLE
        import {MatSlideToggleModule} from '@angular/material/slide-toggle';

//==================================================
//NAVIGATION
//==================================================
    //MENU
        import {MatMenuModule} from '@angular/material/menu';
    //SIDENAV
        import {MatSidenavModule} from '@angular/material/sidenav';
    //TOOLBAR
        import {MatToolbarModule} from '@angular/material/toolbar';

//==================================================
//LAYOUT
//==================================================
    //CARD
        import {MatCardModule} from '@angular/material/card';
    //DIVIDER
        import {MatDividerModule} from '@angular/material/divider';
    //EXPANSION PANEL
        import {MatExpansionModule} from '@angular/material/expansion';
    //GRID LIST
        import {MatGridListModule} from '@angular/material/grid-list';
    //LIST
        import {MatListModule} from '@angular/material/list';
    //STEPPER
        import {MatStepperModule} from '@angular/material/stepper';
    //TABS
        import {MatTabsModule} from '@angular/material/tabs';
    //TREE
        import {MatTreeModule} from '@angular/material/tree';

//==================================================
//BUTTONS & INDICATORS
//==================================================
    //BUTTON
        import {MatButtonModule} from '@angular/material/button';
    //BUTTON TOGGLE
        import {MatButtonToggleModule} from '@angular/material/button-toggle';
    //BADGE
        import {MatBadgeModule} from '@angular/material/badge';
    //CHIPS
        import {MatChipsModule} from '@angular/material/chips';
    //ICON
        import {MatIconModule} from '@angular/material/icon';
    //PROGRESS SPINNER
        import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
    //PROGRESS BAR
        import {MatProgressBarModule} from '@angular/material/progress-bar';
    //RIPPLES
        import {MatRippleModule} from '@angular/material/core';

//==================================================
//POPUPS & MODALS
//==================================================
    //BOTTOM SHEET
    import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
    //DIALOG
    import {MatDialogModule} from '@angular/material/dialog';
    //SNACKBAR
    import {MatSnackBarModule} from '@angular/material/snack-bar';
    //TOOLTIP
    import {MatTooltipModule} from '@angular/material/tooltip';

//==================================================
//DATA TABLE
//==================================================
    //PAGINATOR
    import {MatPaginatorModule} from '@angular/material/paginator';
    //SORT HEADER
    import {MatSortModule} from '@angular/material/sort';
    //TABLE
    import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './entities/admin/admin.component';
import { BranchComponent } from './entities/branch/branch.component';
import { FacultyComponent } from './entities/faculty/faculty.component';
import { StudentComponent } from './entities/student/student.component';
import { InstituteComponent } from './entities/institute/institute.component';

//====================================================================================================

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
    //====================================================================================================
    // ONLY - MAT - HERE
    //====================================================================================================
    MatAutocompleteModule,    MatCheckboxModule,    MatDatepickerModule,    MatNativeDateModule,    MatFormFieldModule,    MatInputModule,    MatRadioModule,    MatSelectModule,    MatSliderModule,    MatSlideToggleModule,

    MatMenuModule,    MatSidenavModule,    MatToolbarModule,

    MatCardModule,    MatDividerModule,    MatExpansionModule,    MatGridListModule,    MatListModule,    MatStepperModule,    MatTabsModule,    MatTreeModule,

    MatButtonModule,    MatButtonToggleModule,    MatBadgeModule,    MatChipsModule,    MatIconModule,    MatProgressSpinnerModule,    MatProgressBarModule,    MatRippleModule,

    MatBottomSheetModule,    MatDialogModule,    MatSnackBarModule,    MatTooltipModule,

    MatPaginatorModule,    MatSortModule,    MatTableModule,
    //====================================================================================================

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
