import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRctComponent } from './form-rct.component';

describe('FormRctComponent', () => {
  let component: FormRctComponent;
  let fixture: ComponentFixture<FormRctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
