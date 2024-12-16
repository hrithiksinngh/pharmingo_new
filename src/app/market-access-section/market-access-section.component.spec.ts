import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketAccessSectionComponent } from './market-access-section.component';

describe('MarketAccessSectionComponent', () => {
  let component: MarketAccessSectionComponent;
  let fixture: ComponentFixture<MarketAccessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketAccessSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketAccessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
