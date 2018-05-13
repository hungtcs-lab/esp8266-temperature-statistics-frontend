import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNavigationComponent } from './slide-navigation.component';

describe('SlideNavigationComponent', () => {
  let component: SlideNavigationComponent;
  let fixture: ComponentFixture<SlideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
