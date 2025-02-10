import { Component } from '@angular/core';
import { FrmIngresosComponent } from '../../componentes/ingresos/frm-ingresos/frm-ingresos.component'; // Importa FrmIngresosComponent

@Component({
  selector: 'app-ingresos',
  standalone: true,  // Asegúrate de indicar que el componente es standalone
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
  imports: [FrmIngresosComponent]  // Agrega FrmIngresosComponent en los imports
})
export class IngresosComponent {
  // Aquí puedes agregar lógica si es necesario
}
