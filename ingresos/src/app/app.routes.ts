import { Routes } from '@angular/router';
import { IngresosComponent } from './paginas/ingresos/ingresos.component';
import { GastosComponent } from './paginas/gastos/gastos.component';
import { InformesComponent } from './paginas/informes/informes.component';

export const routes: Routes = [
    {path: 'ingresos', component: IngresosComponent},
    {path:'gastos', component:GastosComponent},
    {path:"informes",component:InformesComponent}
];
