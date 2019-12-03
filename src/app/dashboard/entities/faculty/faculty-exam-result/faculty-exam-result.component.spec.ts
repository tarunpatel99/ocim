import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyExamResultComponent } from './faculty-exam-result.component';

describe('FacultyExamResultComponent', () => {
  let component: FacultyExamResultComponent;
  let fixture: ComponentFixture<FacultyExamResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyExamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
