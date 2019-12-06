import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyLeaveNoteComponent } from './faculty-leave-note.component';

describe('FacultyLeaveNoteComponent', () => {
  let component: FacultyLeaveNoteComponent;
  let fixture: ComponentFixture<FacultyLeaveNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyLeaveNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyLeaveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
