import { Component } from '@angular/core';
import { FrmGastosComponent } from '../../componentes/ingresos/frm-gastos/frm-gastos.component';




@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [FrmGastosComponent], 
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

}
