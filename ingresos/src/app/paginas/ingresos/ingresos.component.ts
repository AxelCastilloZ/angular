import { Component } from '@angular/core';
import { FrmIngresosComponent } from '../../componentes/ingresos/frm-ingresos/frm-ingresos.component';

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [FrmIngresosComponent],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {

}
