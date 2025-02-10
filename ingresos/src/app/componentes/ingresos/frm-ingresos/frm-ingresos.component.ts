import { Component } from '@angular/core';
import { Iingresos } from '../../../interfaces/iingresos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frm-ingresos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frm-ingresos.component.html',
  styleUrl: './frm-ingresos.component.css'
})
export class FrmIngresosComponent {
  
  ingresos:Iingresos[]=[];

  nuevoingreso:Iingresos={id:"",nombre:"",fecha:"",monto:0};

  agregaIngreso(){
    if(this.nuevoingreso.id==""){
      alert("COMPLETA TODOS LOS DATOS DEL FORMULARIO");
      return;
    }
    const item = this.ingresos.find(item=>item.id==this.nuevoingreso.id);
    if(item){
      const indice = this.ingresos.indexOf(item);
      this.ingresos.splice(indice,1,{...this.nuevoingreso});
      alert("ELEMENTO ACTUALIZADO");
      this.limpiar();
      return;
    }
    const {id,nombre,fecha,monto}=this.nuevoingreso;
    
    this.ingresos.push({...this.nuevoingreso});
    alert("INGRESO AGREGADO");
    this.limpiar();
  }
  limpiar(){
    this.nuevoingreso.id="";
    this.nuevoingreso.nombre="";
    this.nuevoingreso.fecha="";
    this.nuevoingreso.monto=0;
  }
  editar(id:string):void{
    const aux = this.ingresos.find(item=>item.id==id);
    if(aux){
      this.nuevoingreso={...aux};
    }
  }
  eliminar(id:string){
    this.ingresos = this.ingresos.filter(item=>item.id!==id);
    
  }
}
