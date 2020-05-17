/*
Opdracht:       opdrachtnaam
Auteur:         David Siqueira Klein Velderman
Aanmaakdatum:   datum en tijd
Bestandsnaam:   bestandsnaam
 */

var isItRaining = prompt("Regent het?");
var rain = false;

if (isItRaining === "ja" || isItRaining === "Ja") {
    rain = true;
}

if (rain === true) {
    alert("Het regent!");
} else {
    alert("Het regent niet!");
}

