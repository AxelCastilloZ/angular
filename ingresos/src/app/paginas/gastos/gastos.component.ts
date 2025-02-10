import { Component } from '@angular/core';
import { FrmGastosComponent } from '../../componentes/ingresos/frm-gastos/frm-gastos.component';


@Component({
  selector: 'app-gastos',
  standalone: true,
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
  imports: [FrmGastosComponent]
})
export class GastosComponent {
  ingresoIdSeleccionado = '1'; // Simulación de un ingreso seleccionado (debería venir desde un servicio)
}
