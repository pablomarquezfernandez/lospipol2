import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() sacarAlert = new EventEmitter(); 
  pipol: Pipol;
  mensaje ="";

  constructor(
    private pipolService: PipolService,
  ){
    this.pipol = new Pipol();
  }

  insertarPipol(  ){
    this.pipolService.insertarPipols( this.pipol ).then(response => {
      this.sacarAlert.emit(null);
      window.location.href = "/";
    }, error => {
      console.error('Error:', error);
    });
  }


  insertarPipolConError(  ){
    this.pipolService.insertarPipolsConError( this.pipol ).then(response => {
      
    }, error => {
      this.mensaje = "Error: " + error.response.data.message;
      console.error('Error:', error);
    });
  }

}
