import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchExamScheduleComponent } from './branch-exam-schedule.component';

describe('BranchExamScheduleComponent', () => {
  let component: BranchExamScheduleComponent;
  let fixture: ComponentFixture<BranchExamScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchExamScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchExamScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
