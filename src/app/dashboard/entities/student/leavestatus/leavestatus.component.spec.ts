import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavestatusComponent } from './leavestatus.component';

describe('LeavestatusComponent', () => {
  let component: LeavestatusComponent;
  let fixture: ComponentFixture<LeavestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



