import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCustomersComponent } from './section-customers.component';

describe('SectionCustomersComponent', () => {
  let component: SectionCustomersComponent;
  let fixture: ComponentFixture<SectionCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
