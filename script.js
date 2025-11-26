/**Comento multilinea */
//comento in linea


//Stampa console
console.log("Ciao, Mosndo!");

/** 
//Mostra popup con suo messaggio
window.alert("Benvenuto!");

//Mostra un popup che ritorna true/false
console.log (window.confirm("Sei sicuro?"));

*/

//var si usa per dichiarare la variabile
var stringa1 = "Ciao Mondo";        //variabile globale             Gia non la usa nessuno
let stringa2 = "Ciao Mondo!";       //variabile locale.             Si usa più spesso
const costante = "Ciao Mondo!";     //Costante serve per gestire oggeti che non andremo mai a cambiare 
// (son constantes los objetos no el estado del objeto, ej una puerta, el objeto es siempre la puerta pero puede cambiar de abierta a cerrada)

var stringa = "insieme di caratteri";
console.log(stringa[2]);
console.(typeof stringa);

//interi
var intero = 1;
console.log(typeof intero);

//Decimali->Float
var decimale = 1.2;
console.log(typeof decimale);

//Boolean
var bool = true;
console.log(typeof bool);

//Array
var array = [1, 2, 3, 4, 5, 6];
console.log(typeof array);

//Oggetto
var object = {
    "nome": "Mario",
    "età": 30
};
console.log(typeof object);

//Operatori aritmetici
var a = 1;
var b = 2;

console.log (a + b);
console.log (a * b);
console.log (a - b);
console.log (a / b);
console.log (a % b);         //resto della divisione


a = 1;
console.log (a++);       //leo y despues incremento
console.log (++a);       //Incremento despues leo

//operatori logici
console.log (a < b);
console.log (a <= c);
console.log (a == 3);


console.log (!(a < b));     //Not
console.log (a ==3 && b == 1);      //AND
console.log (a ==3 || b == 1);      //OR

//Concatenazione
console.log(stringa1 + stringa2);

a = 2;
b = 3;
c = "1";
console.log(a + b);      //Somma
console.log(a + c);      //21 porque pone el numero con la str
console.log(somma + b);      //213
console.log(somma > 20);      //somma viene convertito in numero -> vero
console.log(somma.length);      //lunghezza della str
console.log(a + b + c);     //51 porque primero suma los numeros y despues pone la str

var d;
console.log(d);     //indefinido
d = undefined


var e = null;
console.log(e);     //null

var oggetto = {
    "nullo": null,
    "undefined": undefined
};
console.log(oggetto);

console.log(d == true);     //falso
console.log(e == true);     //falso
console.log(e == d);        //Los dos son falsos
console.log(e === e);       //nulo es diverso que indefinido





