import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTimeTableComponent } from './faculty-time-table.component';

describe('FacultyTimeTableComponent', () => {
  let component: FacultyTimeTableComponent;
  let fixture: ComponentFixture<FacultyTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
