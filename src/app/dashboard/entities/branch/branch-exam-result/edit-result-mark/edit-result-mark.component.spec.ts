import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResultMarkComponent } from './edit-result-mark.component';

describe('EditResultMarkComponent', () => {
  let component: EditResultMarkComponent;
  let fixture: ComponentFixture<EditResultMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResultMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResultMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
