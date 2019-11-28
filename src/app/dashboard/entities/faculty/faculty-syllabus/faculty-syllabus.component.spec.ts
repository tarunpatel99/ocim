import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySyllabusComponent } from './faculty-syllabus.component';

describe('FacultySyllabusComponent', () => {
  let component: FacultySyllabusComponent;
  let fixture: ComponentFixture<FacultySyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultySyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
