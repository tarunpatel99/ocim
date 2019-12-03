import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchAttendanceComponent } from './branch-attendance.component';

describe('BranchAttendanceComponent', () => {
  let component: BranchAttendanceComponent;
  let fixture: ComponentFixture<BranchAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
