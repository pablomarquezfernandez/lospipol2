import { Injectable } from '@angular/core';
import { Pipol } from '../models/Pipol';
import { Observable, of } from 'rxjs';

import axios from 'axios';
import { Token } from '../models/Token';

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


  insertarPipols2( pipol:Pipol ): Promise< Pipol > {
    return axios.post<Pipol>('http://localhost:8080/api/javeriana/estudiante/estudiante', pipol).then(response => response.data);
  }


  insertarPipols( pipol:Pipol ): Promise< Token > {
    return axios.post<Token>('http://localhost:8080/jwt/security/autenticar/autenticar', pipol).then(response => response.data);
  }
  getPipol( token:Token ): Promise< Pipol > {
    var stoken = token.type + "" + token.token; 
    console.log("----------------------------------------");
    console.log("----------------------------------------");
    console.log("----------------------------------------");
    console.log(token);
    console.log("----------------------------------------");
    console.log("----------------------------------------");
    console.log("----------------------------------------");
    var headers = {"Authorization":stoken, 'Content-Type': 'application/json'}
    return axios.post<Pipol>('http://localhost:8080/jwt/security/usuario', {}, {headers}).then(response => response.data);
  }

  insertarPipolsConError( pipol:Pipol ): Promise< Pipol[] > {
    return axios.get< Pipol[] >('http://localhost:8080/api/javeriana/estudiante/excepcion').then(response => response.data);
  }
}
