import { Component, Input } from '@angular/core';
import { Pipol } from '../../../models/Pipol';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {

  @Input() pipol22:Pipol;

  constructor(){
    this.pipol22 = new Pipol();
  }
}
