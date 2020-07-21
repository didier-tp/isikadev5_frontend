import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  codeDeviseSrc : string;
  codeDeviseTarget : string;
  montant : number;
  montantConverti : number;

  tabDevises : Devise[];

  onConvertir(){
      this.deviseService.convertir(this.codeDeviseSrc,
                                   this.codeDeviseTarget,
                                   this.montant)
                  .subscribe(  (montantConv) => { this.montantConverti = montantConv; } )
  }

  //injection de dépendance via le constructeur
  constructor(private deviseService : DeviseService) { 
    deviseService.getAllDevises()
                 .subscribe(
                   (tabDev)=>{
                    this.tabDevises =  tabDev;
                    this.montant=100;
                    this.codeDeviseSrc =  this.tabDevises[0].code;
                    this.codeDeviseTarget =  this.tabDevises[1].code;
                   }
                 );
  //si lignes de code ici , elles sont exécutées immédiatement (souvent trop tot)
  //avant meme d'avoir récupérer le resultat de l'appel asynchrone. 
  }

  ngOnInit(): void {
  }

}
