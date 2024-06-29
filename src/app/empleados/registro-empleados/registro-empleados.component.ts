import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrl: './registro-empleados.component.css'
})
export class RegistroEmpleadosComponent {

  constructor(private EmpleadosService: EmpleadosService){}


  nuevo: IEmpleado={
    numeroEmpleado: 0,
    nombre: "Angel",
    correo: "angelroberto7777gmail.com",
    telefono: 4775876555,
    fechaNacimiento: new Date(2003, 1, 17),
    sexo: "M"
  }

  agregar(){
    
    if (this.nuevo.nombre == ""){
      alert("Ingresa un nombre!")
      return
    } 
    
    if(this.nuevo.telefono == 0){
      alert("Ingresa un telefono válido!")
      return
    } 

      this.EmpleadosService.agregarEmpleado(this.nuevo);

      this.nuevo = {
        numeroEmpleado: 0,
        nombre: "",
        correo: "",
        telefono: 0,
        fechaNacimiento: new Date(),
        sexo: ""
      }
    }
}
