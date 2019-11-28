import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchClassComponent } from './branch-class.component';

describe('BranchClassComponent', () => {
  let component: BranchClassComponent;
  let fixture: ComponentFixture<BranchClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
