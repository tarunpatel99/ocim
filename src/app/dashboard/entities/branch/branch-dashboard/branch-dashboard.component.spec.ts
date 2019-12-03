import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDashboardComponent } from './branch-dashboard.component';

describe('BranchDashboardComponent', () => {
  let component: BranchDashboardComponent;
  let fixture: ComponentFixture<BranchDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
