import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollintoviewComponent } from './scrollintoview.component';

describe('ScrollintoviewComponent', () => {
  let component: ScrollintoviewComponent;
  let fixture: ComponentFixture<ScrollintoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollintoviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollintoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
