import { Component } from '@angular/core';
import { Pipol } from '../../models/Pipol';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PipolService } from '../../services/pipol.service';

@Component({
  selector: 'app-datospipol',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './datospipol.component.html',
  styleUrl: './datospipol.component.css'
})
export class DatospipolComponent {

  datosModelosService: Pipol[] = [];

  constructor(
    private pipolService: PipolService,
    
  ){
  }

  ngOnInit(): void {
    this.cargarPipolService();
  }

  cargarPipolService(){
    // Interno
    this.pipolService.getPipolsInterno().subscribe( response =>{
      this.datosModelosService  = response;
    } );
  }
}
