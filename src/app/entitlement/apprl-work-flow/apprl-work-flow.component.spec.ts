import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprlWorkFlowComponent } from './apprl-work-flow.component';

describe('ApprlWorkFlowComponent', () => {
  let component: ApprlWorkFlowComponent;
  let fixture: ComponentFixture<ApprlWorkFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprlWorkFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprlWorkFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
