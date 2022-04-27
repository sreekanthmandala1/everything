import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Javascript404PageComponent } from './javascript404-page.component';

describe('Javascript404PageComponent', () => {
  let component: Javascript404PageComponent;
  let fixture: ComponentFixture<Javascript404PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Javascript404PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Javascript404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
