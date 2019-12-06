import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchNoticeComponent } from './branch-notice.component';

describe('BranchNoticeComponent', () => {
  let component: BranchNoticeComponent;
  let fixture: ComponentFixture<BranchNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
