import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonThreeComponent } from './comparison-three.component';

describe('ComparisonThreeComponent', () => {
  let component: ComparisonThreeComponent;
  let fixture: ComponentFixture<ComparisonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
