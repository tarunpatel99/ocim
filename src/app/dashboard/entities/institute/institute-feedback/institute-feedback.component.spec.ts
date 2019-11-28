import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteFeedbackComponent } from './institute-feedback.component';

describe('InstituteFeedbackComponent', () => {
  let component: InstituteFeedbackComponent;
  let fixture: ComponentFixture<InstituteFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
