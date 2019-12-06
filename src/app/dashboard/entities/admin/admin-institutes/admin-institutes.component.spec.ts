import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstitutesComponent } from './admin-institutes.component';

describe('AdminInstitutesComponent', () => {
  let component: AdminInstitutesComponent;
  let fixture: ComponentFixture<AdminInstitutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInstitutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
