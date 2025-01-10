import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoundNumbersComponent } from './wound-numbers.component';

describe('WoundNumbersComponent', () => {
  let component: WoundNumbersComponent;
  let fixture: ComponentFixture<WoundNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoundNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoundNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
