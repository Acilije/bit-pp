// najmanju vrednost izjednaci sa 1 pa saberi sve tri vredonsti
var p1 = 110;
var p2 =20;
var p3 = 50;
var min = 1;
if (p1 < p2 && p1 < p3) {
    p1 = min
    console.log(p1 + p2 + p3);
} else if (p2 < p1 && p2 < p3) {
    p2 = min
    console.log(p1 + p2 + p3);
} else if (p3 < p2 && p3 < p1) {
    p3 = min
    console.log(p1 + p2 + p3);
}


// ako je broj veci od 10 pomnozi sa dva, ako je manji podeli sa 2
//preko ternarnog operatora

var a  = 11; 
(a > 10) ? console.log(2*a) : console.log(a/2);


// naci veci broj ternanrni operator
var s = 2;
var d = 3;
s > d ? console.log("veci je broj" + " " + s) : console.log("veci je broj" + " " + d);