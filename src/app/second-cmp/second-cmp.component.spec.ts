import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCmpComponent } from './second-cmp.component';

describe('SecondCmpComponent', () => {
  let component: SecondCmpComponent;
  let fixture: ComponentFixture<SecondCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
