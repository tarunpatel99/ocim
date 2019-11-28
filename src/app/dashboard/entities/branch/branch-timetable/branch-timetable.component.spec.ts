import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchTimetableComponent } from './branch-timetable.component';

describe('BranchTimetableComponent', () => {
  let component: BranchTimetableComponent;
  let fixture: ComponentFixture<BranchTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
