"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(prenom, nom) {
        if (prenom === void 0) { prenom = "?"; }
        if (nom === void 0) { nom = "?"; }
        this.prenom = prenom;
        this.nom = nom;
        this._age = 0;
        //Object.defineProperty(this, '_age', {enumerable: false});
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    Object.defineProperty(Personne.prototype, "age", {
        get: function () { return this._age; },
        set: function (newAge) {
            if (newAge >= 0)
                this._age = newAge;
            else
                console.log("age negatif interdit");
        },
        enumerable: true,
        configurable: true
    });
    Personne.prototype.afficherV1 = function () {
        console.log(this.prenom + " " + this.nom + " , age=" + this.age);
    };
    Personne.prototype.afficherV2 = function () {
        console.log(JSON.stringify(this));
    };
    return Personne;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(numero, prenom, nom) {
        if (numero === void 0) { numero = 0; }
        if (prenom === void 0) { prenom = "?"; }
        if (nom === void 0) { nom = "?"; }
        var _this = _super.call(this, prenom, nom) || this;
        _this.numero = numero;
        _this.salaire = 0; //par defaut
        return _this;
    }
    Employe.prototype.afficherV1 = function () {
        _super.prototype.afficherV1.call(this);
        console.log("avec numero=" + this.numero + " , salaire=" + this.salaire);
    };
    return Employe;
}(Personne));
var p1 = new Personne("jean", "Bon");
p1.age = 30;
p1.age = -50;
console.log("age de p1 :" + p1.age);
p1.incrementerAge();
console.log("age de p1 :" + p1.age);
console.log("prenom et nom de p1 :" + p1.prenom + " " + p1.nom);
console.log("p1 au format json =" + JSON.stringify(p1));
p1.afficherV1();
p1.afficherV2();
var e1 = new Employe();
e1.age = 20;
e1.prenom = "alex";
e1.nom = "Therieur";
e1.numero = 567;
e1.afficherV1();
var e2 = new Employe(999, "axelle", "Aire");
e2.age = 30;
e2.salaire = 2000;
e2.afficherV1();
//# sourceMappingURL=Personne.js.map