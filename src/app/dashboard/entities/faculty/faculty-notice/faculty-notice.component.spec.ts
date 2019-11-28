import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNoticeComponent } from './faculty-notice.component';

describe('FacultyNoticeComponent', () => {
  let component: FacultyNoticeComponent;
  let fixture: ComponentFixture<FacultyNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
