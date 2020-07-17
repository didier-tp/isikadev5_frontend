import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {
  a : number;
  b : number ;
  res : number;

  onCalculer(){
       //this.res = Number(this.a) + Number(this.b);
       this.res = this.a + this.b; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
