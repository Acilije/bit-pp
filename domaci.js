//Naci minimum i maksimum niza i zameni im mesta...


//maksimum i minimum
var niz = [7, 4, 120, 3, 9, -22, 1, 11, 13, 80];
var min = niz[0];
var max = niz[0];
var position = 0;
var position1 = 0; 
var i;
for (i=0; i < niz.length; i++) {
    if (niz[i] <= min) {
        min = niz[i];
        position = i;
    }
    else if (niz[i] >= max) {
        max = niz[i];
        position1 = i;
    }
}
console.log(min + " je na poziciji " + position);
console.log(max + " je na poziciji " + position1);

