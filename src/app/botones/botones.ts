import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  imports: [CommonModule],
  templateUrl: './botones.html',
  styleUrl: './botones.css',
})
export class Botones {
  @Output() botonClick = new EventEmitter<string>();

  botones: string[] = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];

  clickBoton(valor: string) {
    this.botonClick.emit(valor);
  }
}
