import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchStudentsComponent } from './branch-students.component';

describe('BranchStudentsComponent', () => {
  let component: BranchStudentsComponent;
  let fixture: ComponentFixture<BranchStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
