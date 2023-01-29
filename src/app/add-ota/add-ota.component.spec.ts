import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtaComponent } from './add-ota.component';

describe('AddOtaComponent', () => {
  let component: AddOtaComponent;
  let fixture: ComponentFixture<AddOtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
