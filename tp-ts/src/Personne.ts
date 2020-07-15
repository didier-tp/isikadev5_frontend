class Personne {
  private _age : number;

  constructor(public prenom : string ="?",
              public nom : string ="?"){
    this._age = 0;
    //Object.defineProperty(this, '_age', {enumerable: false});
  }

  incrementerAge():void{
    this.age++;
  }

  public get age() : number { return this._age;}
  public set age(newAge: number)  {
    if(newAge>=0)
       this._age = newAge;
    else console.log("age negatif interdit");
  }

  afficherV1(){
     console.log(`${this.prenom} ${this.nom} , age=${this.age}`)
  }

  afficherV2(){
    console.log(JSON.stringify(this));
  }
}

class Employe extends Personne{
    salaire : number;
  
    constructor(public numero : number =0 , 
                prenom = "?" , 
                nom="?" ){
      super(prenom,nom);
      this.salaire=0; //par defaut
    }
  
    afficherV1(){
      super.afficherV1();
      console.log(`avec numero=${this.numero} , salaire=${this.salaire}`)
   }
  
  }


var p1 : Personne  = new Personne("jean","Bon");
p1.age = 30; 
p1.age = -50;
console.log("age de p1 :" + p1.age);
p1.incrementerAge();
console.log("age de p1 :" + p1.age);
console.log("prenom et nom de p1 :" + p1.prenom + " " + p1.nom);
console.log("p1 au format json =" + JSON.stringify(p1));
p1.afficherV1();
p1.afficherV2();

var e1 :Employe  = new Employe();
e1.age=20; e1.prenom="alex"; e1.nom="Therieur";
e1.numero=567;
e1.afficherV1();
var e2 :Employe  = new Employe(999,"axelle","Aire");
e2.age=30;
e2.salaire=2000;
e2.afficherV1();
