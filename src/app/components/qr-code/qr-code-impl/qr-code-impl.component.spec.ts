import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeImplComponent } from './qr-code-impl.component';

describe('QrCodeImplComponent', () => {
  let component: QrCodeImplComponent;
  let fixture: ComponentFixture<QrCodeImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeImplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
