import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLeaveNoteComponent } from './student-leave-note.component';

describe('StudentLeaveNoteComponent', () => {
  let component: StudentLeaveNoteComponent;
  let fixture: ComponentFixture<StudentLeaveNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLeaveNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLeaveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
