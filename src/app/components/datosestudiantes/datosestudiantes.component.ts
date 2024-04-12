import { Component } from '@angular/core';
import { Pipol } from '../../models/Pipol';
import { PipolService } from '../../services/pipol.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EstudianteComponent } from "./estudiante/estudiante.component";

@Component({
    selector: 'app-datosestudiantes',
    standalone: true,
    templateUrl: './datosestudiantes.component.html',
    styleUrl: './datosestudiantes.component.css',
    imports: [CommonModule, RouterOutlet, EstudianteComponent]
})
export class DatosestudiantesComponent {

  datosModelosServiceExterno: Pipol[] = [];
  pipolo: Pipol;

  constructor(
    private pipolService: PipolService,
    
  ){
    this.pipolo = new Pipol();
  }

  ngOnInit(): void {
    this.cargarPipolService();
  }

  cargarPipolService(){
    // Externo
    this.pipolService.getPipolsExterno().then((post) => {
      this.datosModelosServiceExterno = post;
    }).catch((error) => {
      console.error(error);
    });
  }

  cambiarPipol( event: Event, pipol: Pipol ){
    event.preventDefault();
    this.pipolo = pipol;
  }
}
