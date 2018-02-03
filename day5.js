// poredjaj ih po velicini...

var a = 5;
var b = 84;
var c = 21;
var niz;

if ( a > b && a > c) {
    if ( b > c) {
        niz = [a, b, c];
    } else if ( c > b) {
        niz = [a, c, b];
    }
  
 }
else if ( b > a && b > c) {
    if ( a > c ) {
        niz = [b, a, c];
    } else if ( c > a ) {
        niz = [b, c, a];
    }
}
else if ( c > a && c > b ) {
    if ( a > b ) {
    niz = [c, a, b];
    } else if ( b > a) {
        niz = [c, b, a];
    }
}
console.log(niz);
