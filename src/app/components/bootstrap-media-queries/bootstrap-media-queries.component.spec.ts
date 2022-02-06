import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMediaQueriesComponent } from './bootstrap-media-queries.component';

describe('BootstrapMediaQueriesComponent', () => {
  let component: BootstrapMediaQueriesComponent;
  let fixture: ComponentFixture<BootstrapMediaQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapMediaQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapMediaQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
