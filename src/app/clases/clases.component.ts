import { Component, OnInit } from '@angular/core';
import { Clase } from '../shared/models/clase';
import { ClasesMock } from '../shared/clases-mock';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  claseSeleccionada : Clase;
  clases : Array<Clase>;
  constructor() { }

  ngOnInit() {
    this.clases = ClasesMock;
  }

  onClick(clase : Clase): void{
    this.claseSeleccionada = clase;
  }
}
