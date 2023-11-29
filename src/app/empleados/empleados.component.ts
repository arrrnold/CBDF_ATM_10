import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  // arreglo de empleados
  empleados = [
    { id: 1, nombre: "David", sueldo: 1, activo: false },
    { id: 2, nombre: "Fernando", sueldo: 1530, activo: true },
    { id: 3, nombre: "Ricardo", sueldo: 1530, activo: true },
    { id: 4, nombre: "Wendy", sueldo: 1530, activo: true },
    { id: 5, nombre: "Gael", sueldo: 14502, activo: false },
    { id: 6, nombre: "Uriel", sueldo: 14502, activo: false },
    { id: 7, nombre: "Manuel", sueldo: 121324, activo: false },
    { id: 8, nombre: "Joel", sueldo: 16452, activo: true },
    { id: 9, nombre: "Babel", sueldo: 14531, activo: true },
    { id: 10, nombre: "Cordel", sueldo: 14302, activo: false }
  ]
}
