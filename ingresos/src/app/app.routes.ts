import { Routes } from '@angular/router';
import { GastosComponent } from './paginas/gastos/gastos.component';
import { IngresosComponent } from './paginas/ingresos/ingresos.component';

export const routes: Routes = [
  { path: 'gastos', component: GastosComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: '', redirectTo: '/gastos', pathMatch: 'full' }
];
