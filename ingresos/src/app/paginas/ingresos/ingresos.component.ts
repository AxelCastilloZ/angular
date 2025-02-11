import { Component } from '@angular/core';
import { FrmIngresosComponent } from '../../componentes/ingresos/frm-ingresos/frm-ingresos.component'; // Importa FrmIngresosComponent

@Component({
  selector: 'app-ingresos',
  standalone: true,  
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
  imports: [FrmIngresosComponent]  
})
export class IngresosComponent {
 
}
