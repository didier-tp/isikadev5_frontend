import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private devises : Devise[] = [
    new Devise('EUR','Euro',1.0),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9)
  ];

  public getAllDevises() : Observable<Devise[]>{
    return of(this.devises); //version préliminaire (maintenant asynchrone)
  }

  public convertir(codeDeviseSrc : string, 
                  codeDeviseTarget : string ,
                   montant: number) : Observable<number> {
                     return of(0.8967); //version temporaire (maintenant asynchrone)
  }

  constructor() { }
}
