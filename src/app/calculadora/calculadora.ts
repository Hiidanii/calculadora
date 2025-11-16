import { Component } from '@angular/core';
import { Botones } from "../botones/botones";

@Component({
  selector: 'app-calculadora',
  imports: [Botones],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  pantalla: string = '';

  procesarBoton(valor: string) {
    if (valor === 'C') {
      this.pantalla = '';
    } else if (valor === '=') {
      try {
        this.pantalla = eval(this.pantalla).toString();
      } catch {
        this.pantalla = 'Error';
      }
    } else {
      this.pantalla += valor;
    }
  }
}
