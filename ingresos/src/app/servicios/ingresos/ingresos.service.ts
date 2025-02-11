import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Iingresos } from '../../interfaces/iingresos';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  private ingresos: Iingresos[] = []; 

  private ingresosSubject = new BehaviorSubject<Iingresos[]>(this.ingresos);
  ingresos$ = this.ingresosSubject.asObservable();

  constructor() {}

  obtenerIngresos() {
    return this.ingresos$; 
  }

  agregarIngreso(nuevoIngreso: Iingresos) {
    this.ingresos.push(nuevoIngreso);
    this.ingresosSubject.next([...this.ingresos]); 
  }

  eliminarIngreso(id: string) {
    this.ingresos = this.ingresos.filter(i => i.id !== id);
    this.ingresosSubject.next([...this.ingresos]); 
  }

  obtenerIngresoPorId(id: string): Iingresos | undefined {
    return this.ingresos.find(i => i.id === id);
  }

  actualizarIngreso(ingresoActualizado: Iingresos) {
    const index = this.ingresos.findIndex(i => i.id === ingresoActualizado.id);
    if (index !== -1) {
      this.ingresos[index] = ingresoActualizado;
      this.ingresosSubject.next([...this.ingresos]); 
    }
  }
  
}
