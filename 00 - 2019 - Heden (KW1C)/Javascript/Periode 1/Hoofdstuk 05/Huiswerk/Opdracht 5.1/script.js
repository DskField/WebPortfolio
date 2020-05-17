/*
    Opdracht:       Opdracht 5.1
    Auteur:         David Siqueira Klein Velderman
    Aanmaakdatum:   3/10/19 + 13:34
    Bestandsnaam:   opdracht5.1.js
*/

var age;
var groupSize;

age = prompt("Wat is je leeftijd?");
groupSize = prompt("Hoe groot is je groep?");

console.log(`Current age is ${age}`);
console.log(`Current group size is ${groupSize}`);

if (age >= 25) {
    alert("Geen legitimatie laten zien.");
} else {
    alert("Toon legitimatie");
}

if (groupSize > 1) {
    alert("Alle personen moeten zich legitimeren.");
} else {
    alert("U bent alleen.");
}

alert("Dank voor uw bezoek aan de winkel.");