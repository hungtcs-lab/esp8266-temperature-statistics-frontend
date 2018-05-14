import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CillboardComponent } from './cillboard.component';

describe('CillboardComponent', () => {
  let component: CillboardComponent;
  let fixture: ComponentFixture<CillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CillboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
