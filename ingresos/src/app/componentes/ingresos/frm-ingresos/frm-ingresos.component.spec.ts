import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmIngresosComponent } from './frm-ingresos.component';

describe('FrmIngresosComponent', () => {
  let component: FrmIngresosComponent;
  let fixture: ComponentFixture<FrmIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmIngresosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
