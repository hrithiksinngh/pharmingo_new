import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePackagesSectionComponent } from './explore-packages-section.component';

describe('ExplorePackagesSectionComponent', () => {
  let component: ExplorePackagesSectionComponent;
  let fixture: ComponentFixture<ExplorePackagesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePackagesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorePackagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
