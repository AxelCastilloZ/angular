import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmGastosComponent } from './frm-gastos.component';

describe('FrmGastosComponent', () => {
  let component: FrmGastosComponent;
  let fixture: ComponentFixture<FrmGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmGastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
