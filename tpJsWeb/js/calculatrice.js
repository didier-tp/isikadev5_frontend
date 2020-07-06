
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
