import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchFacultiesComponent } from './branch-faculties.component';

describe('BranchFacultiesComponent', () => {
  let component: BranchFacultiesComponent;
  let fixture: ComponentFixture<BranchFacultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchFacultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
