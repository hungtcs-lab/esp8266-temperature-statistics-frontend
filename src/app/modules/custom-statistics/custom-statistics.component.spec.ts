import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStatisticsComponent } from './custom-statistics.component';

describe('CustomStatisticsComponent', () => {
  let component: CustomStatisticsComponent;
  let fixture: ComponentFixture<CustomStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
