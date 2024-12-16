import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectedPackageComponent } from './slected-package.component';

describe('SlectedPackageComponent', () => {
  let component: SlectedPackageComponent;
  let fixture: ComponentFixture<SlectedPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlectedPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlectedPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
