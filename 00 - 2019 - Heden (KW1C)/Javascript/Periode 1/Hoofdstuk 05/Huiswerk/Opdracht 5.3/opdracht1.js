/*
Opdracht:       opdrachtnaam
Auteur:         David Siqueira Klein Velderman
Aanmaakdatum:   datum en tijd
Bestandsnaam:   bestandsnaam
 */

var rain = false;
var isItRaining = prompt("Is het droog buiten?");

if (isItRaining.toLowerCase() === "ja") {
    rain = true;
}

if (rain) {
    alert("Geen regenpak nodig!");
} else {
    alert("Trek je regenpak aan!");
}

