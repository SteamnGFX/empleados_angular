import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';
import { RegistroEmpleadosComponent } from './registro-empleados/registro-empleados.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { EmpleadosService } from './empleados.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaEmpleadosComponent,
    RegistroEmpleadosComponent,
    ListadoEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    TablaEmpleadosComponent,
    RegistroEmpleadosComponent,
    ListadoEmpleadosComponent
  ], providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
