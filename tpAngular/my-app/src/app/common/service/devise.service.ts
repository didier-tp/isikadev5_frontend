import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private devises : Devise[] = [
    new Devise('EUR','Euro',1.0),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9)
  ];

  public getAllDevises() : Devise[]{
    return this.devises; //version préliminaire (par encore asynchrone)
  }

  public convertir(codeDeviseSrc : string, 
                  codeDeviseTarget : string ,
                   montant: number) : number {
                     return 0.8967; //version temporaire (par encore asynchrone)
  }

  constructor() { }
}
