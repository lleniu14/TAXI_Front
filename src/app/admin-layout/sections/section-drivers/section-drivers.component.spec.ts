import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDriversComponent } from './section-drivers.component';

describe('SectionDriversComponent', () => {
  let component: SectionDriversComponent;
  let fixture: ComponentFixture<SectionDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
