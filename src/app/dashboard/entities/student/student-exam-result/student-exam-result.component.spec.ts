import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamResultComponent } from './student-exam-result.component';

describe('StudentExamResultComponent', () => {
  let component: StudentExamResultComponent;
  let fixture: ComponentFixture<StudentExamResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentExamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
