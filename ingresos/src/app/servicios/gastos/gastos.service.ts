import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Igastos } from '../../interfaces/igastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private gastos: Igastos[] = [];  
  private gastosSubject = new BehaviorSubject<Igastos[]>(this.gastos); 

  obtenerGastos(): Observable<Igastos[]> {
    return this.gastosSubject.asObservable();
  }

  obtenerGastosPorIngreso(ingresoId: string): Observable<Igastos[]> {
    return this.gastosSubject.asObservable().pipe(
      map((gastos: Igastos[]) => gastos.filter(g => g.ingresoId === ingresoId))
    );
  }

  agregarGasto(gasto: Igastos) {
    this.gastos.push(gasto);
    this.gastosSubject.next([...this.gastos]); 
  }

  eliminarGasto(id: string) {
    this.gastos = this.gastos.filter(g => g.id !== id);
    this.gastosSubject.next([...this.gastos]); 
  }

  obtenerGastoPorId(id: string): Igastos | undefined {
    return this.gastos.find(g => g.id === id);
  }

  actualizarGasto(gastoActualizado: Igastos) {
    const index = this.gastos.findIndex(g => g.id === gastoActualizado.id);
    if (index !== -1) {
      this.gastos[index] = gastoActualizado;
      this.gastosSubject.next([...this.gastos]); 
    }
  }
}
