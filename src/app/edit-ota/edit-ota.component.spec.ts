import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtaComponent } from './edit-ota.component';

describe('EditOtaComponent', () => {
  let component: EditOtaComponent;
  let fixture: ComponentFixture<EditOtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
