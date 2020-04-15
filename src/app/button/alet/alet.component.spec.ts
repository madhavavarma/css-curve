import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AletComponent } from './alet.component';

describe('AletComponent', () => {
  let component: AletComponent;
  let fixture: ComponentFixture<AletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
