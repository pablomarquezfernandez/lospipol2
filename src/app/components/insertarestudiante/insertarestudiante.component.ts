import { Component, EventEmitter, Output } from '@angular/core';
import { Pipol } from '../../models/Pipol';

import { FormsModule } from '@angular/forms';
import { PipolService } from '../../services/pipol.service';
import { Token } from '@angular/compiler';

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

  insertarPipol( event: Event ){
    event.preventDefault();
    this.pipolService.insertarPipols( this.pipol ).then(response => {
      console.log( response );
      localStorage.setItem("user",JSON.stringify(response));
      this.sacarAlert.emit(null);
      // window.location.href = "/";
    }, error => {
      console.error('Error:', error);
    });
  }

  getPipol(  ){
    var susuario =  localStorage.getItem("user");
    if( susuario != null ){
      var token = JSON.parse(susuario);
      this.pipolService.getPipol( token ).then(response => {
        alert( JSON.stringify( response )  );
        // window.location.href = "/";
      }, error => {
        console.error('Error:', error);
      });
    }
    // var token = JSON.parse(susuario);
    // const str: string | null = JSON.parse(susuario); 
  }

  insertarPipolConError(  ){
    this.pipolService.insertarPipolsConError( this.pipol ).then(response => {
      
    }, error => {
      this.mensaje = "Error: " + error.response.data.message;
      console.error('Error:', error);
    });
  }

}
