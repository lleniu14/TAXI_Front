import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatsComponent } from './section-stats.component';

describe('SectionStatsComponent', () => {
  let component: SectionStatsComponent;
  let fixture: ComponentFixture<SectionStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
