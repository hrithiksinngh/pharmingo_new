import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateDashboardComponent } from './empty-state-dashboard.component';

describe('EmptyStateDashboardComponent', () => {
  let component: EmptyStateDashboardComponent;
  let fixture: ComponentFixture<EmptyStateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyStateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
