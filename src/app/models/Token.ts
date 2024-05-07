import { Pipol } from "./Pipol";

export class Token {
    constructor(
      public token?: string | null,
      public type?: string | null,
      public date?: string | null,
      public usuario?: Pipol | null,
    ){}
  
  }