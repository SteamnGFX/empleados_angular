import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosModule } from './empleados/empleados.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Empleados';
}
