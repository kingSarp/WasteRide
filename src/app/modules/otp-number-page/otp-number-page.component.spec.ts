import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpNumberPageComponent } from './otp-number-page.component';

describe('OtpNumberPageComponent', () => {
  let component: OtpNumberPageComponent;
  let fixture: ComponentFixture<OtpNumberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpNumberPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpNumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
