import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchExamResultComponent } from './branch-exam-result.component';

describe('BranchExamResultComponent', () => {
  let component: BranchExamResultComponent;
  let fixture: ComponentFixture<BranchExamResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchExamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
