import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPreviewDataComponent } from './filter-preview-data.component';

describe('FilterPreviewDataComponent', () => {
  let component: FilterPreviewDataComponent;
  let fixture: ComponentFixture<FilterPreviewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterPreviewDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPreviewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
