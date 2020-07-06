
var zoneRes;

function initZones(){
	zoneRes=document.getElementById("spanRes");
}

function calculerOperation(pOperation){
		  initZones();
		  var a =  document.getElementById("a").value;
		  console.log("a="+a);
		  var b =   document.getElementById("b").value;
		  console.log("b="+b);
		  
		  var res = 0;
		  switch(pOperation){
		  case '+':
		      res = Number(a)+Number(b); // le + déclenche une concaténation entre 2 string
		                 //ou bien une addition entre 2 choses numériques
			  break;
		  case '*':
			  res=a*b;  break;
		  case '-':
			  res=a-b;  break;
		  case '/':
			  res=a/b;  break;
		  default:
			  res="?";  break;
		   }
		  
		  //document.getElementById("spanRes").innerHTML = res;
          zoneRes.innerHTML = res;
		  document.getElementById("spanRes").style.color='red';
		  //document.getElementById("spanRes").style.visibility='hidden';
		  document.getElementById("spanRes").style.display='block';//ou 'none'
		  
		  /*
		  var zoneTitre1 = document.getElementById("titre1");
		  var zs = document.createElement("span");
		  zs.innerHTML=" javascript";
		  zs.style.fontStyle='italic';
		  zoneTitre1.appendChild(zs);
		  */
		  var zoneHistorique = document.getElementById("ulHistorique");
		  var li = document.createElement("li");
		  li.innerHTML="a="+a+" op="+pOperation + " b="+b+" res="+res ;
		  li.style.fontStyle='italic';
		  zoneHistorique.appendChild(li);
		  
		}
		
function calculer_fx(){
  var zoneX = document.getElementById("x");
  var zoneFx = document.getElementById("fx");
  var zoneResY = document.getElementById("spanResY");
  var x = zoneX.value; //ex: 4
  var fx = zoneFx.value; // ex: 3*x
  var y = eval(fx);
  zoneResY.innerHTML="<b>"+y+"</b>";
}	

function voirOuMontrerHistorique(){
	 var zoneHistorique = document.getElementById("ulHistorique");
	 var zoneCheckBox = document.getElementById("cbHisto");
	 if(zoneCheckBox.checked){
		 zoneHistorique.style.display="block";
	 }else{
		 zoneHistorique.style.display="none";
	 }
}
