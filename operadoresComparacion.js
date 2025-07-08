console.log("[ Operadores de comparacion ]");
console.log("-----------------------------");

let num11 =5;
let num22 =10;
 
//Operadores de comparacion

let estado1 = num11 == num22;
let estado2 = num11 != num22;
let estado3 = num11 > num22;
let estado4 = num11 < num22;
let estado5 = num11 >= num22;
let estado6 = num11 <= num22;
let estado7 = estado1 && estado2; // ambos positivos
let estado8 = estado1 || estado2; // al menos uno positivo
let estado9 = !estado1;         // negación de igualdad 

console.log("Estado 1:", estado1);
console.log("Estado 2:", estado2);
console.log("Estado 3:", estado3);
console.log("Estado 4:", estado4);
console.log("Estado 5:", estado5);
console.log("Estado 6:", estado6);
console.log("Estado 7 (AND):", estado7); 
console.log("Estado 8 (OR):", estado8);  
console.log("Estado 9 (NOT):", estado9)