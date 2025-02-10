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

  constructor(private gastosService: GastosService) {}

  ngOnInit() {
    this.nuevoGasto.ingresoId = this.ingresoId; // Asegurar que el gasto esté relacionado con el ingreso correcto
    this.gastosService.obtenerGastosPorIngreso(this.ingresoId).subscribe(data => {
      this.gastos = data;
    });
  }

  agregarGasto() {
    if (this.nuevoGasto.descripcion && this.nuevoGasto.fecha && this.nuevoGasto.monto > 0) {
      this.nuevoGasto.id = Math.random().toString(36).substr(2, 9); // Generar un ID aleatorio
      this.nuevoGasto.ingresoId = this.ingresoId;
      this.gastosService.agregarGasto(this.nuevoGasto);
      this.nuevoGasto = { id: '', ingresoId: this.ingresoId, descripcion: '', fecha: '', monto: 0 };
    }
  }

  eliminar(id: string) {
    this.gastosService.eliminarGasto(id);
  }

  editar(id: string) {
    const gasto = this.gastosService.obtenerGastoPorId(id);
    if (gasto) {
      this.nuevoGasto = { ...gasto };
    }
  }
}
