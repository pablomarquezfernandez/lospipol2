import { Component } from '@angular/core';
import { Pipol } from '../../models/Pipol';

import { FormsModule } from '@angular/forms';
import { PipolService } from '../../services/pipol.service';

@Component({
  selector: 'app-insertarestudiante',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertarestudiante.component.html',
  styleUrl: './insertarestudiante.component.css'
})
export class InsertarestudianteComponent {

  pipol: Pipol;

  constructor(
    private pipolService: PipolService,
  ){
    this.pipol = new Pipol();
  }

  insertarPipol(  ){
    this.pipolService.insertarPipols( this.pipol ).then(response => {
      window.location.href = "/";
    }, error => {
      console.error('Error:', error);
    });
  }
}
