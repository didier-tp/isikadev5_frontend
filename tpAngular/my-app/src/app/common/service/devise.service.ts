import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import {  map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
    //return of(this.devises); //version préliminaire (maintenant asynchrone)
      let baseUrl = "http://localhost:8282/devise-api/public/devise";
      let wsUrl = `${baseUrl}`;
      return this.http.get<Devise[]>(wsUrl);
    }

  public convertir(codeDeviseSrc : string, 
                  codeDeviseTarget : string ,
                   montant: number) : Observable<number> {
                    //return of(0.89675); //version temporaire (maintenant asynchrone)
      let baseUrl = "http://localhost:8282/devise-api/public/convert";
      let wsUrl = `${baseUrl}?source=${codeDeviseSrc}&target=${codeDeviseTarget}&amount=${montant}`;
      console.log("wsUrl="+wsUrl);
      return this.http.get<ConvResult>(wsUrl)
                  .pipe(
                     map( (resConv:ConvResult)=>resConv.result)
                  );
  
  }

  //injecter ici http de type HttpClient
  constructor(private http: HttpClient){ }
}
