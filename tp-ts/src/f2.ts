var tab1 = [ "javascript" , "typescript" , "dom" , "e4v2" ];
var tab2 : string[] = []; 
for(let val of tab1){
    tab2.push(val.toUpperCase());
}
console.log(tab2);

var nom : string;
nom="didier";
var message=`mon nom est ${nom}`
console.log("message:"+message);

/*
cet exemple necessite 
     "lib": ["es2015","dom"],
et   "downlevelIteration": true,  
  dans tsconfig.json
*/
var m = new Map();
m.set("hiver", "froid , neige");
m.set("primptemps", "fleur , vert");
for(let [k,v] of m.entries()){
    console.log("saison "+ k + " -- " + v);
    }
