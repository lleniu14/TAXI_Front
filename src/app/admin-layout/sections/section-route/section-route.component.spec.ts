import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRouteComponent } from './section-route.component';

describe('SectionRouteComponent', () => {
  let component: SectionRouteComponent;
  let fixture: ComponentFixture<SectionRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
