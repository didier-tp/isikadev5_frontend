import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  listeCouleurs : string[] = [ "yellow", "white" , "green" , "red" , "blue"] ; 


  humeur : string = "bonneHumeur"; //par défaut
  listeHumeurs : string[] = [ "bonneHumeur", "mauvaiseHumeur"] ;
  
  @Output()
  public changementHumeur : EventEmitter<{value:string}> = new EventEmitter<{value:string}>(); 

  onChangeHumeur(){
    console.log("dans FooterComponent , onChangeHumeur()")
    this.changementHumeur.emit({value:this.humeur});
  }

  //V1: preferencesService avec sous partie .couleurFondPreferee public et accès direct possible
  //V2: preferencesService avec behaviorSubject et copie locale de couleurFondPreferee
  couleurFondPrefereeLocale : string;

  constructor(public preferencesService : PreferencesService) {
    this.couleurFondPrefereeLocale = "yellow";
    preferencesService.setNewCouleurFondPreferee(this.couleurFondPrefereeLocale);
   }

   onChangeCouleurFondPrefereeLocale(){
    this.preferencesService.setNewCouleurFondPreferee(this.couleurFondPrefereeLocale);
   }
 

  ngOnInit(): void {
  }

}
