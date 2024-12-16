import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingDetailsSectionComponent } from './offering-details-section.component';

describe('OfferingDetailsSectionComponent', () => {
  let component: OfferingDetailsSectionComponent;
  let fixture: ComponentFixture<OfferingDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferingDetailsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferingDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
