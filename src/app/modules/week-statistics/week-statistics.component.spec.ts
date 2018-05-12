import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekStatisticsComponent } from './week-statistics.component';

describe('WeekStatisticsComponent', () => {
  let component: WeekStatisticsComponent;
  let fixture: ComponentFixture<WeekStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
