//Pravljenje obejkta

var breakfast = {
    name: "Acilije",
    ingredients: ["jaja", "hleb", "jogurt", "kecap", "burek", "majonez"],
    energy: 1320,
    NacinPripreme: function () {
        console.log("na prazan burek stavi ispzeno jaje sa majonezom i kecapom. Sve to zaliti jogurtom i jedi sa hlebom")
    },
    JSComplant: function () {
        if (breakfast.energy > 500) {
            return true;
        } else
            return false;

    }
};

console.log(breakfast.JSComplant());


 
var dorucak = {
    ime : "Pizza",
    sastojci : ["testo", "kecap", "sunka","kackavalj"],
    energija : 550,
    nacinPrireme : function() {
        console.log("Ubaciti u rernu");        
    },
    jsComplant : function() {
        if (this.energija > 500) {
            return true;
        }else {
            return false;
        }
    }
};

console.log(dorucak.jsComplant());  