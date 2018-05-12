import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualStatisticsComponent } from './annual-statistics.component';

describe('AnnualStatisticsComponent', () => {
  let component: AnnualStatisticsComponent;
  let fixture: ComponentFixture<AnnualStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
