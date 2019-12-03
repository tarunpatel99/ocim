import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchFeesComponent } from './branch-fees.component';

describe('BranchFeesComponent', () => {
  let component: BranchFeesComponent;
  let fixture: ComponentFixture<BranchFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
