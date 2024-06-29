import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrl: './tabla-empleados.component.css'
})
export class TablaEmpleadosComponent {

  constructor(private EmpleadosService: EmpleadosService) { }

  get empleados(): IEmpleado[] {
    return this.EmpleadosService.empleados;
  }

  eliminarEmpleado(empleado: IEmpleado){
    this.EmpleadosService.eliminarEmpleadoPorNumero(empleado.numeroEmpleado)
  }
}
