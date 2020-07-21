import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import {  map} from 'rxjs/operators';

//{"source":"EUR","target":"USD","amount":200,"result":219.78021978021977}
interface ConvResult{
   source: string;
   target : string;
   amount : number;
   result : number;
}

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private devises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9)
  ];

  public getAllDevises() : Observable<Devise[]>{
    return of(this.devises); //version préliminaire (maintenant asynchrone)
  }

  public convertir(codeDeviseSrc : string, 
                  codeDeviseTarget : string ,
                   montant: number) : Observable<number> {
                    // return of(0.89675); //version temporaire (maintenant asynchrone)
  return this.http.get....
                  .pipe(
                     map( (resConv:ConvResult)=>resConv.result)
                  );
  
  }

  //injecter ici http de type HttpClient
  constructor() { }
}
