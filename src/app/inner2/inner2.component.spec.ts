import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inner2Component } from './inner2.component';

describe('Inner2Component', () => {
  let component: Inner2Component;
  let fixture: ComponentFixture<Inner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
