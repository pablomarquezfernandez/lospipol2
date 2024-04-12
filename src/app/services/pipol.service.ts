import { Injectable } from '@angular/core';
import { Pipol } from '../models/Pipol';
import { Observable, of } from 'rxjs';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PipolService {

  constructor() { }


  getPipolsInterno(): Observable< Pipol[] > {
    return of([
      new Pipol(1, "Pablo", "Márquez", ""),
      new Pipol(2, "María", "Pacheco", ""),
      new Pipol(3, "Francisco", "Márquez", ""),
      new Pipol(4, "Miguel", "Márquez", ""),
    ]);
  }

  getPipolsExterno(): Promise< Pipol[] > {
    return axios.get< Pipol[] >('http://localhost:8080/api/javeriana/estudiante/estudiante').then(response => response.data);
  }


  insertarPipols( pipol:Pipol ): Promise< Pipol > {
    return axios.post<Pipol>('http://localhost:8080/api/javeriana/estudiante/estudiante', pipol).then(response => response.data);
  }
}
