import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignApproversComponent } from './assign-approvers.component';

describe('AssignApproversComponent', () => {
  let component: AssignApproversComponent;
  let fixture: ComponentFixture<AssignApproversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignApproversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignApproversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
