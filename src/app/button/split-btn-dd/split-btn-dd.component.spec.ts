import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBtnDdComponent } from './split-btn-dd.component';

describe('SplitBtnDdComponent', () => {
  let component: SplitBtnDdComponent;
  let fixture: ComponentFixture<SplitBtnDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitBtnDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitBtnDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
