import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GastosService } from '../../../servicios/gastos/gastos.service';
import { Igastos } from '../../../interfaces/igastos';


@Component({
  selector: 'app-frm-gastos',
  standalone: true,
  templateUrl: './frm-gastos.component.html',
  styleUrls: ['./frm-gastos.component.css'],
  imports: [CommonModule, FormsModule]
})
export class FrmGastosComponent implements OnInit {
  @Input() ingresoId!: string; // Recibe el ID del ingreso desde el padre
  nuevoGasto: Igastos = { id: '', ingresoId: '', descripcion: '', fecha: '', monto: 0 };
  gastos: Igastos[] = [];
  esEdicion: boolean = false; // Agregar esta variable para saber si estamos editando

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    this.nuevoGasto.ingresoId = this.ingresoId;
    this.gastosService.obtenerGastosPorIngreso(this.ingresoId).subscribe(data => {
      this.gastos = data;
    });
  }
  

  agregarGasto() {
    if (this.nuevoGasto.descripcion && this.nuevoGasto.fecha && this.nuevoGasto.monto > 0) {
      if (this.esEdicion) {
        // Si es edición, actualizamos el gasto
        this.gastosService.actualizarGasto(this.nuevoGasto);
        this.esEdicion = false; // Restablecer la bandera de edición
      } else {
        // Si es nuevo, agregamos el gasto
        this.nuevoGasto.id = Math.random().toString(36).substr(2, 9); // Generar un ID aleatorio
        this.nuevoGasto.ingresoId = this.ingresoId;
        this.gastosService.agregarGasto(this.nuevoGasto);
      }
      this.nuevoGasto = { id: '', ingresoId: this.ingresoId, descripcion: '', fecha: '', monto: 0 }; // Limpiar formulario
    }
  }

  eliminar(id: string) {
    this.gastosService.eliminarGasto(id);
  }

  editar(id: string) {
    const gasto = this.gastosService.obtenerGastoPorId(id);
    if (gasto) {
      this.nuevoGasto = { ...gasto }; // Rellenar los datos del gasto en el formulario
      this.esEdicion = true; // Establecer que estamos editando
    }
  }
}
