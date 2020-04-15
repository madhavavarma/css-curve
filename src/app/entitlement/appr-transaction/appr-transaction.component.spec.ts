import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprTransactionComponent } from './appr-transaction.component';

describe('ApprTransactionComponent', () => {
  let component: ApprTransactionComponent;
  let fixture: ComponentFixture<ApprTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
