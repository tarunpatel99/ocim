import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLeaveNotesComponent } from './branch-leave-notes.component';

describe('BranchLeaveNotesComponent', () => {
  let component: BranchLeaveNotesComponent;
  let fixture: ComponentFixture<BranchLeaveNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchLeaveNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchLeaveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
