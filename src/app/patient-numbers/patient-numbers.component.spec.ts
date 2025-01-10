import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNumbersComponent } from './patient-numbers.component';

describe('PatientNumbersComponent', () => {
  let component: PatientNumbersComponent;
  let fixture: ComponentFixture<PatientNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
