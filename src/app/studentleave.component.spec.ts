import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentleaveComponent } from './studentleave.component';

describe('StudentleaveComponent', () => {
  let component: StudentleaveComponent;
  let fixture: ComponentFixture<StudentleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
