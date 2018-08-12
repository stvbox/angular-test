import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCmpComponent } from './main-cmp.component';

describe('MainCmpComponent', () => {
  let component: MainCmpComponent;
  let fixture: ComponentFixture<MainCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
