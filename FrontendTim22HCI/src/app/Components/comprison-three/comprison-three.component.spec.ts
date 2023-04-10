import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprisonThreeComponent } from './comprison-three.component';

describe('ComprisonThreeComponent', () => {
  let component: ComprisonThreeComponent;
  let fixture: ComponentFixture<ComprisonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprisonThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprisonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
