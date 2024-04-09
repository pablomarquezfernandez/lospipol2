import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pipol } from './models/Pipol';
import { CommonModule } from '@angular/common';
import { PipolService } from './services/pipol.service';
import { DatosestudiantesComponent } from "./components/datosestudiantes/datosestudiantes.component";
import { DatosclaseComponent } from "./components/datosclase/datosclase.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, DatosestudiantesComponent, DatosclaseComponent]
})
export class AppComponent {
  title = 'lospipol';
  
  datosModelosService: Pipol[] = [];
  datosModelosServiceExterno: Pipol[] = [];
  datos = [
    {nombres: "Pablo", apellidos:"Márquez"},
    {nombres: "María", apellidos:"Pacheco"},
    {nombres: "Francisco", apellidos:"Márquez"},
    {nombres: "Miguel", apellidos:"Márquez"},

  ];
  datosModelos = [
    new Pipol(1, "Pablo", "Márquez", ""),
    new Pipol(2, "María", "Pacheco", ""),
    new Pipol(3, "Francisco", "Márquez", ""),
    new Pipol(4, "Miguel", "Márquez", ""),
  ]
  

  constructor(
    private pipolService: PipolService,
    
  ){
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

    // Interno
    this.pipolService.getPipolsInterno().subscribe( response =>{
      this.datosModelosService  = response;
    } );
  }
}
