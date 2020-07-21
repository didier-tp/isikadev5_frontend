import { Component, OnInit , Input } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  titre : string = "default title";

  myMenuDefs :MenuDefinition[] = [
    { label : "basic" , path : 'ngr-basic' },
    { label : "welcome" , path : "ngr-welcome" },
    { label : "conversion" , path : "ngr-conversion" },
    { label : "admin" , 
      children : [
        { label : "login" , path : "ngr-login" } ,
        { divider : true },
        { label : "admin-devise" , path : "ngr-admin-devise" } 
      ]
    } 
    ];

   couleurFondPrefereeLocale : string; //V2 avec behaviorSubject

  constructor(public preferencesService : PreferencesService) {
    console.log("dans constructeur, titre="+this.titre);
    preferencesService.getBsCouleurFondPreferee()
                      .subscribe((nouvelleCouleurFondPreferee)=>{
                        console.log("nouvelleCouleurFondPreferee="+nouvelleCouleurFondPreferee)
                        this.couleurFondPrefereeLocale=
                             nouvelleCouleurFondPreferee;}
                        );
   }

  ngOnInit(): void {
    console.log("dans ngOnInit(), titre="+this.titre);
  }
}
