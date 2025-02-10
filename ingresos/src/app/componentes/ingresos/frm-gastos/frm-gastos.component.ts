import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Igastos } from '../../../interfaces/igastos';

@Component({
  selector: 'app-frm-gastos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frm-gastos.component.html',
  styleUrl: './frm-gastos.component.css'
})
export class FrmGastosComponent {
  
  gastos: Igastos[] = [];

  nuevogasto: Igastos = { id: "", ingresoId: "", monto: 0, descripcion: "", fecha: "" };

  agregaGasto() {
    if (this.nuevogasto.id === "" || this.nuevogasto.descripcion === "" || this.nuevogasto.fecha === "") {
      alert("COMPLETA TODOS LOS DATOS DEL FORMULARIO");
      return;
    }
    
    const item = this.gastos.find(item => item.id === this.nuevogasto.id);
    
    if (item) {
      const indice = this.gastos.indexOf(item);
      this.gastos.splice(indice, 1, { ...this.nuevogasto });
      alert("GASTO ACTUALIZADO");
      this.limpiar();
      return;
    }

    this.gastos.push({ ...this.nuevogasto });
    alert("GASTO AGREGADO");
    this.limpiar();
  }

  limpiar() {
    this.nuevogasto = { id: "", ingresoId: "", monto: 0, descripcion: "", fecha: "" };
  }

  editar(id: string): void {
    const aux = this.gastos.find(item => item.id === id);
    if (aux) {
      this.nuevogasto = { ...aux };
    }
  }

  eliminar(id: string) {
    this.gastos = this.gastos.filter(item => item.id !== id);
  }
}
