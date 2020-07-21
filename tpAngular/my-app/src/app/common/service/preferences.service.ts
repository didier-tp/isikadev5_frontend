import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  //v1 (public) 
  //public couleurFondPreferee: string = "yellow";

  //V2 (private et BehaviorSubject)
  private couleurFondPreferee: string = "yellow";
  private  bsCouleurFondPreferee : BehaviorSubject<string> ;

  public getBsCouleurFondPreferee(){
    return this.bsCouleurFondPreferee;
  }
  constructor() { 
    this.bsCouleurFondPreferee= new BehaviorSubject<string>(this.couleurFondPreferee);
  }
  
  public setNewCouleurFondPreferee(c:string){
    this.couleurFondPreferee=c;
    this.bsCouleurFondPreferee.next(this.couleurFondPreferee);
    // .next(nouvelleValeur)
    //declenchera toutes les callbacks enregistrees via .subscribe()
  }

}
