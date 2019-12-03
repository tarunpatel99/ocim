import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyExamScheduleComponent } from './faculty-exam-schedule.component';

describe('FacultyExamScheduleComponent', () => {
  let component: FacultyExamScheduleComponent;
  let fixture: ComponentFixture<FacultyExamScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyExamScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyExamScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
