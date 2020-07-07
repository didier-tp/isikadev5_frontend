window.onload = function () {
	
	var zoneBtnAdd = document.querySelector("#btnAdd");
	var zoneTabBody = document.querySelector("#tab_body");
	
	zoneBtnAdd.addEventListener("click",function (evt){
        var nouvelleDevise = {
			code : undefined,
			nom : undefined,
			change : 1
		}
		nouvelleDevise.code = document.querySelector("#code").value;
		nouvelleDevise.nom = document.querySelector("#nom").value;
		nouvelleDevise.change = Number(document.querySelector("#change").value);
		console.log("nouvelleDevise="+JSON.stringify(nouvelleDevise));
		/*
		//solution 1:
		var nouveauTr = document.createElement("tr");
		zoneTabBody.appendChild(nouveauTr);
		var nouveauTdCode = document.createElement("td");
		nouveauTr.appendChild(nouveauTdCode);
		nouveauTdCode.appendChild(document.createTextNode(nouvelleDevise.code));
		var nouveauTdNom = document.createElement("td");
		nouveauTr.appendChild(nouveauTdNom);
		nouveauTdNom.innerHTML=nouvelleDevise.nom;
		var nouveauTdChange =document.createElement("td");
		nouveauTr.appendChild(nouveauTdChange);
		nouveauTdChange.innerHTML=nouvelleDevise.change;
		*/
		
		//solution 2:
		var nouveauTr = zoneTabBody.insertRow(-1);
		var nouveauTdCode = nouveauTr.insertCell(0);
		nouveauTdCode.innerHTML=nouvelleDevise.code;
		var nouveauTdNom = nouveauTr.insertCell(1);
		nouveauTdNom.innerHTML=nouvelleDevise.nom;
		var nouveauTdChange = nouveauTr.insertCell(2);
		nouveauTdChange.innerHTML=nouvelleDevise.change;
		
	});
	
	
}