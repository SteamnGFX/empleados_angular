import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  //Lista de empleados
  private _empleados: IEmpleado[] = []

  //Creamos un metodo get par aacceder a la lista.
  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  //Método para agregar un nuevo cliente a la lista
  agregarEmpleado(empleado: IEmpleado) {
    this._empleados.push(empleado);

    localStorage.setItem('empleado', JSON.stringify(this._empleados));

  }

  // Método para eliminar un empleado por su numeroEmpleado del localStorage
  eliminarEmpleadoPorNumero(numeroEmpleado: number) {
    const index = this._empleados.findIndex(e => e.numeroEmpleado === numeroEmpleado);
    if (index !== -1) {
      this._empleados.splice(index, 1);
      localStorage.setItem('empleado', JSON.stringify(this._empleados));
    }
  }

 
  constructor() {
    //Recuperamos del localStorage los empleados previos
    this._empleados = JSON.parse(localStorage.getItem('empleado')!) || [];
  }
}
