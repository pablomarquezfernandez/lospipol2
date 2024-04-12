import { Routes } from '@angular/router';
import { DatosestudiantesComponent } from './components/datosestudiantes/datosestudiantes.component';
import { DatospipolComponent } from './components/datospipol/datospipol.component';
import { InsertarestudianteComponent } from './components/insertarestudiante/insertarestudiante.component';

export const routes: Routes = [
    
    { path: '', component: DatosestudiantesComponent },
    { path: 'pipol/data', component: DatospipolComponent },
    { path: 'insertar', component: InsertarestudianteComponent }
  ]
