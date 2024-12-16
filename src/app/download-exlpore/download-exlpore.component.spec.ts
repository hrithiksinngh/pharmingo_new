import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExlporeComponent } from './download-exlpore.component';

describe('DownloadExlporeComponent', () => {
  let component: DownloadExlporeComponent;
  let fixture: ComponentFixture<DownloadExlporeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadExlporeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadExlporeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
