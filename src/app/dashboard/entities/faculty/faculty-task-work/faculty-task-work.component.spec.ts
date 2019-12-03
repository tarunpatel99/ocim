import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTaskWorkComponent } from './faculty-task-work.component';

describe('FacultyTaskWorkComponent', () => {
  let component: FacultyTaskWorkComponent;
  let fixture: ComponentFixture<FacultyTaskWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyTaskWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTaskWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
