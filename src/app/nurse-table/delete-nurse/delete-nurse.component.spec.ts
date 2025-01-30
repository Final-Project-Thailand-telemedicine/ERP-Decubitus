import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNurseComponent } from './delete-nurse.component';

describe('DeleteNurseComponent', () => {
  let component: DeleteNurseComponent;
  let fixture: ComponentFixture<DeleteNurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteNurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
