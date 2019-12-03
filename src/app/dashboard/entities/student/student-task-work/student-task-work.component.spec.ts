import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTaskWorkComponent } from './student-task-work.component';

describe('StudentTaskWorkComponent', () => {
  let component: StudentTaskWorkComponent;
  let fixture: ComponentFixture<StudentTaskWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTaskWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTaskWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
