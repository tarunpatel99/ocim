import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSyllabusComponent } from './student-syllabus.component';

describe('StudentSyllabusComponent', () => {
  let component: StudentSyllabusComponent;
  let fixture: ComponentFixture<StudentSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
