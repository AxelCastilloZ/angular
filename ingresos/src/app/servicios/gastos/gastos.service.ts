import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Igastos } from '../../interfaces/igastos';
@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private gastos: Igastos[] = [];

  obtenerGastos(): Observable<Igastos[]> {
    return of(this.gastos);
  }

  obtenerGastosPorIngreso(ingresoId: string): Observable<Igastos[]> {
    return of(this.gastos.filter(g => g.ingresoId === ingresoId));
  }

  agregarGasto(gasto: Igastos) {
    this.gastos.push(gasto);
  }

  eliminarGasto(id: string) {
    this.gastos = this.gastos.filter(g => g.id !== id);
  }

  obtenerGastoPorId(id: string): Igastos | undefined {
    return this.gastos.find(g => g.id === id);
  }

  actualizarGasto(gastoActualizado: Igastos) {
    const index = this.gastos.findIndex(g => g.id === gastoActualizado.id);
    if (index !== -1) {
      this.gastos[index] = gastoActualizado;
    }
  }
}
