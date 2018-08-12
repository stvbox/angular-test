import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamCmpComponent } from './param-cmp.component';

describe('ParamCmpComponent', () => {
  let component: ParamCmpComponent;
  let fixture: ComponentFixture<ParamCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
