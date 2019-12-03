import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteBranchesComponent } from './institute-branches.component';

describe('InstituteBranchesComponent', () => {
  let component: InstituteBranchesComponent;
  let fixture: ComponentFixture<InstituteBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
