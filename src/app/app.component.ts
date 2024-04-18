import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pipol } from './models/Pipol';
import { CommonModule } from '@angular/common';
import { PipolService } from './services/pipol.service';
import { DatosestudiantesComponent } from "./components/datosestudiantes/datosestudiantes.component";
import { DatosclaseComponent } from "./components/datosclase/datosclase.component";
import { InsertarestudianteComponent } from "./components/insertarestudiante/insertarestudiante.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, DatosestudiantesComponent, DatosclaseComponent, InsertarestudianteComponent]
})
export class AppComponent {
  title = 'lospipol';
  
  
  
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
  }

  sacarAlerta(){
    alert("Proceso exitoso");
  }
  
}
