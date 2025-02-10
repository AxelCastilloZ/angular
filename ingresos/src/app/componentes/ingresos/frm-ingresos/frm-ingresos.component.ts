import { Component } from '@angular/core';
import { IngresosService } from '../../../servicios/ingresos/ingresos.service';
import { Iingresos } from '../../../interfaces/iingresos';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { CommonModule } from '@angular/common'; // Necesario para ngFor

@Component({
  selector: 'app-frm-ingresos',
  standalone: true,
  templateUrl: './frm-ingresos.component.html',
  styleUrls: ['./frm-ingresos.component.css'],
  imports: [CommonModule, FormsModule] // Importar módulos aquí
})
export class FrmIngresosComponent {
  nuevoIngreso: Iingresos = { id: '', nombre: '', fecha: '', monto: 0 };
  ingresos: Iingresos[] = [];

  constructor(private ingresosService: IngresosService) {}

  ngOnInit() {
    this.ingresosService.obtenerIngresos().subscribe(data => {
      this.ingresos = data;
    });
  }

  agregaIngreso() {
    if (this.nuevoIngreso.id && this.nuevoIngreso.nombre && this.nuevoIngreso.fecha) {
      this.ingresosService.agregarIngreso(this.nuevoIngreso);
      this.nuevoIngreso = { id: '', nombre: '', fecha: '', monto: 0 }; // Limpiar formulario
    }
  }

  eliminar(id: string) {
    this.ingresosService.eliminarIngreso(id);
  }

  editar(id: string) {
    const ingreso = this.ingresosService.obtenerIngresoPorId(id);
    if (ingreso) {
      this.nuevoIngreso = { ...ingreso };
    }
  }
}
