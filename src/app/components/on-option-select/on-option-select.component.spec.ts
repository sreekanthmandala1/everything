import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOptionSelectComponent } from './on-option-select.component';

describe('OnOptionSelectComponent', () => {
  let component: OnOptionSelectComponent;
  let fixture: ComponentFixture<OnOptionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnOptionSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOptionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
