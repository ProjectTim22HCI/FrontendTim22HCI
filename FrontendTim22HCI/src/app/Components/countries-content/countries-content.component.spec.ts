import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContentComponent } from './countries-content.component';

describe('CountriesContentComponent', () => {
  let component: CountriesContentComponent;
  let fixture: ComponentFixture<CountriesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
