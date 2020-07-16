
var stdin = process.stdin;
var stdout = process.stdout;
function ask(question:string, callback:Function) {
    stdin.resume();
    stdout.write(question + ": ");
    stdin.once('data', function(data :string) {
        data = data.toString().trim();
        callback(data);
    });
}	
//ask("nom", function(nomSaisi){ console.log("nomSaisi="+nomSaisi); });
var a:number;
var x:number;
var b:number;
var res:number;

ask("a", function(sA:string){ 
   a = Number(sA);
   ask("x", function(sX:string){
	   x= Number(sX);
	   ask("b", function(sB:string){
	      b= Number(sB);
		  res=a*x+b;
		  console.log("a*x+b="+res);
		  process.exit()
       });
   });
});
