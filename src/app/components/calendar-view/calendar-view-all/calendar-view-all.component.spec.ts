import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewAllComponent } from './calendar-view-all.component';

describe('CalendarViewAllComponent', () => {
  let component: CalendarViewAllComponent;
  let fixture: ComponentFixture<CalendarViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
