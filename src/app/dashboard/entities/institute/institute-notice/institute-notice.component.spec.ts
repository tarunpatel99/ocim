import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteNoticeComponent } from './institute-notice.component';

describe('InstituteNoticeComponent', () => {
  let component: InstituteNoticeComponent;
  let fixture: ComponentFixture<InstituteNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
