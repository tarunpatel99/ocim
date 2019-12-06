import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutePaymentsComponent } from './institute-payments.component';

describe('InstitutePaymentsComponent', () => {
  let component: InstitutePaymentsComponent;
  let fixture: ComponentFixture<InstitutePaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutePaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
