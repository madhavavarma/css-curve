import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUnlimitAmtComponent } from './input-unlimit-amt.component';

describe('InputUnlimitAmtComponent', () => {
  let component: InputUnlimitAmtComponent;
  let fixture: ComponentFixture<InputUnlimitAmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputUnlimitAmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputUnlimitAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
