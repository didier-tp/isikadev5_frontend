"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personne_1 = require("./Personne");
var Employe_1 = require("./Employe");
var p1 = new Personne_1.Personne("jean", "Bon");
p1.age = 30;
p1.age = -50;
console.log("age de p1 :" + p1.age);
var obj;
obj = p1;
// obj.nom; refusé
var nimportquoi;
nimportquoi = p1;
var h1;
h1 = p1;
h1.nom;
// any , object , interface Humain  , class Personne
p1.incrementerAge();
console.log("age de p1 :" + p1.age);
console.log("prenom et nom de p1 :" + p1.prenom + " " + p1.nom);
console.log("p1 au format json =" + JSON.stringify(p1));
p1.afficherV1();
p1.afficherV2();
var e1 = new Employe_1.Employe();
e1.age = 20;
e1.prenom = "alex";
e1.nom = "Therieur";
e1.numero = 567;
e1.afficherV1();
var e2 = new Employe_1.Employe(999, "axelle", "Aire");
e2.age = 30;
e2.salaire = 2000;
e2.afficherV1();
//# sourceMappingURL=test_pers_emp.js.map