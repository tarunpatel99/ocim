import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeesComponent } from './student-fees.component';

describe('StudentFeesComponent', () => {
  let component: StudentFeesComponent;
  let fixture: ComponentFixture<StudentFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
